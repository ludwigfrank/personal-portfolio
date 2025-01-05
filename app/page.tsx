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
              className='transform scale-x-[-1] scale-y-[0.9] translate-y-[-20px] hidden md:block'
              alt='1'
            />
          </div>
        </section>

        <section className='w-full px-5 mt-16 lg:mt-40'>
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

            <div>
              <p className='text-2xl tracking-tight font-medium mb-4 lg:text-5xl lg:leading-[56px] lg:mb-8'>
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
                className='text-md tracking-tight max-w-[720] lg:text-xl lg:leading-8'
                style={{
                  fontFamily: 'Signifier',
                }}
              >
                Ludwig von Frank is a designer and creative technologist. He is
                leading CX Design for Hopper/HTS and is the founder of the
                creative agency Fine Supply. Ludwig shaped the products at
                Commbank, HSBC, Uber, Tripadvisor, Moonfare and many more.
              </p>
            </div>
          </div>
        </section>

        <section className='w-full px-5'>
          <div className='max-w-[960] m-auto relative flex lg:items-center justify-between gap-4 flex-col lg:flex-row'>
            <div className='grid md:flex md:flex-row gap-3'>
              <a
                href='#'
                className='inline-flex transition-all duration-300 ease-in-out justify-center items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-lg w-auto font-medium shadow-xl hover:bg-neutral-800 hover:shadow-3xl hover:gap-3 hover:px-7'
              >
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M4.5 0.5H3V2H2.5C1.67157 2 1 2.67157 1 3.5V12.5C1 13.3284 1.67157 14 2.5 14H13.5C14.3284 14 15 13.3284 15 12.5V3.5C15 2.67157 14.3284 2 13.5 2H13V0.5H11.5V2H4.5V0.5ZM2.5 12.5L2.5 6H13.5V12.5H2.5ZM6 7.5H4V9.5H6V7.5Z'
                    fill='currentColor'
                  />
                </svg>
                Book a call
              </a>

              <a
                href='#'
                className='inline-flex transition-all duration-300 ease-in-out justify-center items-center gap-2 px-6 py-3 text-neutral-700 rounded-lg w-auto font-medium border hover:text-neutral-900 hover:bg-neutral-100 hover:gap-3 hover:px-7'
              >
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M2.5 2C1.67157 2 1 2.67157 1 3.5V4.98984L7.80064 7.4628C7.92942 7.50962 8.07056 7.50962 8.19934 7.4628L15 4.98983V3.5C15 2.67157 14.3284 2 13.5 2H2.5ZM15 6.58592L8.71196 8.87249C8.25204 9.03973 7.74794 9.03973 7.28803 8.87249L1 6.58593V12.5C1 13.3284 1.67157 14 2.5 14H13.5C14.3284 14 15 13.3284 15 12.5V6.58592Z'
                    fill='currentCOlor'
                  />
                </svg>
                Contact via email
              </a>
            </div>

            <div className='flex justify-between md:flex-col md:justify-end'>
              <p className='text-sm text-neutral-600 text-right'>Singapore</p>
              <p className='text-sm text-neutral-600 text-right'>
                Sunday, 10:23 AM
              </p>
            </div>
          </div>
        </section>
        <section>
          <CarouselDemo />
        </section>
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
        <p className='text-sm text-neutral-400 my-4'>
          © 2024, Ludwig von Frank
        </p>
      </footer>
    </div>
  );
}
