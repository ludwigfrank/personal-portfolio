// Import global css
import CarouselDemo from '@/components/infinite-carousel';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='font-[family-name:var(--font-geist-sans)]'>
      <main className='font-[system-ui]'>
        <section>
          <div className='absolute top-0 right-0'>
            <Image
              src='/img/vines-left.png'
              className='transform scale-x-[-1]'
              width={800}
              height={500}
              alt='1'
            />
          </div>

          <div className='absolute top-0 left-0'>
            <Image
              src='/img/vines-right.png'
              width={800}
              height={500}
              className='transform scale-x-[-1] scale-y-[0.9] translate-y-[-20px]'
              alt='1'
            />
          </div>
        </section>

        <section className='w-full mt-40'>
          <div className='max-w-[960] m-auto mb-8 flex flex-col relative'>
            <div className='mb-6'>
              <Image
                src='/img/avatar.png'
                alt='Ludwig Frank'
                width={56}
                height={56}
                className='rounded-full'
              />
            </div>

            <div className='mb-8'>
              <p className='text-5xl tracking-tight font-medium leading-[56px] mb-8'>
                Lead with curiosity, shape with clarity — products that are{' '}
                <span
                  style={{
                    fontFamily: 'Signifier',
                    fontSize: '112%',
                    fontWeight: 400,
                  }}
                >
                  simple
                </span>
                , yet{' '}
                <span
                  style={{
                    fontFamily: 'Signifier',
                    fontSize: '112%',
                    fontWeight: 400,
                  }}
                >
                  impossible to ignore.
                </span>
              </p>
              <p
                className='text-xl tracking-tight max-w-[720] leading-8'
                style={{
                  fontFamily: 'Signifier',
                }}
              >
                Ludwig Frank is a designer and creative technologist. He is
                leading CX Design for Hopper/HTS and is the founder of the
                creative agency Fine Supply. Ludwig shaped the products at
                Commbank, HSBC, Uber, Tripadvisor, Moonfare and many more.
              </p>
            </div>
          </div>
        </section>

        <section className='w-full '>
          <div className='max-w-[960] m-auto relative flex items-center justify-between gap-4'>
            <div className='flex gap-2'>
              <a
                href='#'
                className='inline-block px-6 py-3 bg-[#2726E9] text-white rounded-full w-auto font-medium shadow-xl hover:bg-[#1F1DCA] hover:shadow-3xl'
              >
                Book a call
              </a>

              <a
                href='#'
                className='inline-block px-6 py-3 box-border border transition-colors text-neutral-600 rounded-full w-auto font-medium hover:bg-neutral-100 hover:text-neutral-900'
              >
                Contact via email
              </a>
            </div>

            <div>
              <p className='text-sm text-neutral-600 text-right'>Based</p>
              <p className='text-sm text-neutral-600'>Singapore, 10:23 AM</p>
            </div>
          </div>
        </section>

        <section>
          <CarouselDemo />
        </section>
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
        TBD
      </footer>
    </div>
  );
}
