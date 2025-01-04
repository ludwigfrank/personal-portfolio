'use client';

import React, { useEffect, useRef, useState } from 'react';

interface CarouselItem {
  id: string | number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface CarouselConfig {
  // Animation settings
  speedMultiplier?: number; // Base animation speed (seconds per item)
  minSets?: number; // Minimum number of item set repetitions
  extraSets?: number; // Additional sets beyond minimum required

  // Spacing settings
  gap?: number; // Space between items in pixels
  containerPadding?: number; // Padding around the container

  // Visual settings
  borderRadius?: number; // Border radius of images
  objectFit?: 'cover' | 'contain' | 'fill';
}

interface InfiniteCarouselProps {
  items: CarouselItem[];
  config?: CarouselConfig;
}

const defaultConfig: CarouselConfig = {
  speedMultiplier: 5, // 5 seconds per item
  minSets: 2, // Minimum 2 sets of items
  extraSets: 1, // 1 extra set beyond minimum required
  gap: 24, // 24px gap between items
  containerPadding: 16, // 16px container padding
  borderRadius: 8, // 8px border radius
  objectFit: 'cover', // Default object-fit
};

const InfiniteCarousel = ({
  items = [],
  config = {},
}: InfiniteCarouselProps) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  // Merge default config with user config
  const finalConfig = { ...defaultConfig, ...config };
  const {
    speedMultiplier = 5,
    minSets = 2,
    extraSets = 1,
    gap = 24,
    containerPadding = 16,
    borderRadius = 8,
    objectFit = 'cover',
  } = finalConfig;

  useEffect(() => {
    if (!containerRef.current || items.length === 0) return;

    const calculateTotalWidth = () => {
      // Calculate total width including gaps
      return items.reduce((acc, item) => acc + item.width + gap, 0);
    };

    const updateDimensions = () => {
      const containerWidth = containerRef.current
        ? (containerRef.current as HTMLDivElement).offsetWidth
        : 0;
      const totalWidth = calculateTotalWidth();

      setContainerWidth(containerWidth);
      setTotalWidth(totalWidth);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, [items, gap]);

  const getItemSets = () => {
    if (!totalWidth || !containerWidth || totalWidth === 0) return items;

    const setsNeeded = Math.max(
      Math.ceil((containerWidth * 3) / totalWidth) + extraSets,
      minSets
    );
    return Array(setsNeeded).fill(items).flat();
  };

  const itemSets = getItemSets();

  return (
    <div
      ref={containerRef}
      className='w-full overflow-hidden relative'
      style={{ padding: containerPadding }}
    >
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${totalWidth || 0}px);
            }
          }
          .carousel-scroll {
            animation: scroll ${items.length * 8}s linear infinite;
            animation-play-state: ${totalWidth ? 'running' : 'paused'};
          }
        `}
      </style>
      <div
        ref={contentRef}
        className='flex carousel-scroll'
        style={{
          willChange: 'transform',
        }}
      >
        {itemSets.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            style={{
              paddingLeft: gap / 2,
              paddingRight: gap / 2,
            }}
            className='flex-none'
          >
            <img
              src={item.src || '/api/placeholder/400/300'}
              alt={item.alt || `Carousel item ${index + 1}`}
              style={{
                width: item.width,
                height: item.height,
                borderRadius,
                objectFit,
                border: '1px solid #ddd',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Example usage with custom config
const CarouselDemo = () => {
  const sampleItems = [
    {
      id: 1,
      src: '/img/work/moonfare-3.png',
      alt: 'Sample 1',
      width: 1796 / 2.8,
      height: 1197 / 2.8,
    },
    {
      id: 2,
      src: '/img/work/moonfare-2.png',
      alt: 'Sample 2',
      width: 754 / 3,
      height: 1628 / 3,
    },
    {
      id: 3,
      src: '/img/work/veita-1.png',
      alt: 'Sample 3',
      width: 1796 / 2.8,
      height: 1197 / 2.8,
    },
    {
      id: 2,
      src: '/img/work/flooz-accept-message.png',
      alt: 'Sample 2',
      width: 750 / 3,
      height: 1652 / 3,
    },
    {
      id: 2,
      src: '/img/work/flooz-event-details.png',
      alt: 'Sample 2',
      width: 750 / 3,
      height: 1652 / 3,
    },
  ];

  const customConfig: CarouselConfig = {
    speedMultiplier: 3, // Faster animation
    gap: 32, // Larger gaps
    borderRadius: 12, // Rounder corners
    objectFit: 'contain', // Different image fitting
  };

  return (
    <div className='w-full mx-auto my-20'>
      <InfiniteCarousel items={sampleItems} config={customConfig} />
    </div>
  );
};

export default CarouselDemo;
