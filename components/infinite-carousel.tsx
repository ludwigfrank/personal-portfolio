'use client';
import React, { useEffect, useRef, useState } from 'react';
import videoFlooz from '@/videos/flooz-marketing-website-new.mp4.json';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import BackgroundVideo with no SSR
const BackgroundVideo = dynamic(() => import('next-video/background-video'), {
  ssr: false,
});

interface CarouselItem {
  id: string | number;
  type?: 'image' | 'video';
  src: string | object;
  alt: string;
  width: number;
  height: number;
}

interface CarouselConfig {
  speedMultiplier?: number;
  minSets?: number;
  extraSets?: number;
  gap?: number;
  containerPadding?: number;
  borderRadius?: number;
  objectFit?: 'cover' | 'contain' | 'fill';
  mobileBreakpoint?: number;
}

interface InfiniteCarouselProps {
  items: CarouselItem[];
  config?: CarouselConfig;
}

const defaultConfig: CarouselConfig = {
  speedMultiplier: 5,
  minSets: 2,
  extraSets: 1,
  gap: 16,
  containerPadding: 16,
  borderRadius: 8,
  objectFit: 'cover',
  mobileBreakpoint: 768,
};

const InfiniteCarousel = ({
  items = [],
  config = {},
}: InfiniteCarouselProps) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const finalConfig = { ...defaultConfig, ...config };
  const {
    minSets = 2,
    extraSets = 1,
    gap = 0,
    containerPadding,
    borderRadius,
    objectFit,
    mobileBreakpoint,
  } = finalConfig;

  // Calculate scaled dimensions based on container width
  const getScaledDimensions = (item: CarouselItem) => {
    if (!containerWidth) return { width: item.width, height: item.height };

    if (!isMobile) return { width: item.width, height: item.height };

    // Calculate max dimensions for mobile
    const maxWidth = containerWidth - gap;
    const maxHeight = window.innerHeight * 0.5; // 60vh

    // Calculate scale based on both width and height constraints
    const scaleByWidth = maxWidth / item.width;
    const scaleByHeight = maxHeight / item.height;
    const scale = Math.min(scaleByWidth, scaleByHeight);

    // Apply scale to both dimensions to maintain aspect ratio
    return {
      width: Math.round(item.width * scale),
      height: Math.round(item.height * scale),
    };
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!containerRef.current || items.length === 0) return;

    const calculateTotalWidth = () => {
      return items.reduce((acc, item) => {
        const { width } = getScaledDimensions(item);
        return acc + width + gap;
      }, 0);
    };

    const updateDimensions = () => {
      const containerWidth = containerRef.current?.offsetWidth || 0;
      setIsMobile(window.innerWidth < (mobileBreakpoint || 768));
      setContainerWidth(containerWidth);

      // Delay total width calculation to next frame to ensure scaled dimensions are calculated
      requestAnimationFrame(() => {
        setTotalWidth(calculateTotalWidth());
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, [items, gap, mobileBreakpoint]);

  const getItemSets = () => {
    if (!totalWidth || !containerWidth || totalWidth === 0) return items;

    const setsNeeded = Math.max(
      Math.ceil((containerWidth * 3) / totalWidth) + extraSets,
      minSets
    );
    return Array(setsNeeded).fill(items).flat();
  };

  const itemSets = getItemSets();

  // Render placeholder during SSR for video items
  const renderItem = (item: CarouselItem) => {
    const dimensions = getScaledDimensions(item);
    const style = {
      ...dimensions,
      borderRadius,
      objectFit,
    };

    if (item.type === 'video') {
      if (!isClient) {
        return (
          <div
            className='border overflow-hidden rounded-lg bg-gray-100'
            style={style}
          />
        );
      }
      return (
        <div className='border overflow-hidden rounded-lg' style={style}>
          <BackgroundVideo src={item.src as string} />
        </div>
      );
    }

    return (
      <Image
        src={item.src as string}
        width={dimensions.width}
        height={dimensions.height}
        alt={item.alt}
        style={style}
        className='object-cover border rounded-lg'
      />
    );
  };

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
            {renderItem(item)}
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
      id: 4,
      src: '/img/work/flooz-accept-message.png',
      alt: 'Sample 2',
      width: 750 / 3,
      height: 1652 / 3,
    },
    {
      id: 5,
      src: '/img/work/flooz-event-details.png',
      alt: 'Sample 2',
      width: 750 / 3,
      height: 1652 / 3,
    },
    {
      id: 6,
      type: 'video' as const,
      src: videoFlooz,
      alt: 'Flooz video',
      width: 1000,
      height: 666,
    },
  ];

  const customConfig: CarouselConfig = {
    speedMultiplier: 3, // Faster animation
    gap: 16, // Larger gaps
    borderRadius: 12, // Rounder corners
    objectFit: 'contain', // Different image fitting
  };

  return (
    <div className='w-full mx-auto my-4 md:my-16'>
      <InfiniteCarousel items={sampleItems} config={customConfig} />
    </div>
  );
};

export default CarouselDemo;
