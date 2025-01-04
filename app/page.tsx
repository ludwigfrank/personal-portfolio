// Import global css
import Image from 'next/image';

export default function Home() {
  return (
    <div className='font-[family-name:var(--font-geist-sans)]'>
      <main className='font-[system-ui]'>
        {/* Create two images placed absolute and fixed at the top left and right */}
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
              // scale 0.8 in y axis move 20px to the top
              className='transform scale-x-[-1] scale-y-[0.9] translate-y-[-20px]'
              alt='1'
            />
          </div>
        </section>
        {/* <section className='w-full flex justify-center'>
          <div className='w-[960px] fixed'>
            <div
              className='container'
              style={{
                perspective: '1000px',
                // make more round
                borderRadius: '50%',
                //fixed position
                left: '0',
                marginLeft: '0px',
                scale: '0.5',
                // move 20px to the left
                transform: 'translateX(-64px)',
                // filter
                filter: 'drop-shadow(0 32px 24px rgba(0,0,0,0.1))',
              }}
            >
              <div className='coin pound'>
                <div className='face front'></div>
                <div className='face back'></div>
                <figure className='side'></figure>
                <figure className='side'></figure>
                <figure className='side'></figure>
                <figure className='side'></figure>
                <figure className='side'></figure>
                <figure className='side'></figure>
                <figure className='side'></figure>
                <figure className='side'></figure>
                <figure className='side'></figure>
                <figure className='side'></figure>
                <figure className='side'></figure>
                <figure className='side'></figure>
                <figure className='side'></figure>
                <figure className='side'></figure>
                <figure className='side'></figure>
                <figure className='side'></figure>
                <figure className='side'></figure>
                <figure className='side'></figure>
                <figure className='side'></figure>
                <figure className='side'></figure>
              </div>
            </div>
          </div>
        </section> */}
        <section className='w-full mt-40'>
          <div className='max-w-[960] m-auto mt-24 mb-8 flex flex-col relative'>
            <div className='mb-6'>
              <Image
                src='/img/avatar.png'
                alt='Ludwig Frank'
                width={56}
                height={56}
                className='rounded-full'
              />
            </div>

            {/* <div className='mb-12'>
              <p
                className='text-6xl tracking-tight leading-[60px] mb-6'
                style={{ fontFamily: 'Founders Grotesk' }}
              >
                Lead with curiosity, shape with clarity — design{' '}
                <span
                  style={{
                    // make italic
                    fontStyle: 'italic',

                    fontFamily: 'Signifier',
                  }}
                >
                  simple
                </span>
                , and{' '}
                <span
                  style={{
                    // make italic
                    fontStyle: 'italic',
                    fontFamily: 'Signifier',
                  }}
                >
                  impossible to ignore.
                </span>
              </p>
              <p
                className='text-2xl max-w-[640] leading-8'
                style={{
                  // make italic
                  fontFamily: 'Signifier',
                }}
              >
                Ludwig Frank is a designer and creative technologist. Currently
                he is leading CX Design for Hopper and HTS. He shaped the
                products at Hopper, HTS, Commbank, Uber, Moonfare, Tripadvisor
                and many more.
              </p>
            </div> */}

            <div className='mb-12'>
              <p className='text-6xl tracking-tight font-medium leading-[64px] mb-8'>
                Lead with curiosity, shape with clarity — products that are{' '}
                <span
                  style={{
                    // make italic

                    fontFamily: 'Signifier',
                    fontSize: '112%',
                    //italic
                    fontWeight: 400,
                  }}
                >
                  simple
                </span>
                , yet{' '}
                <span
                  style={{
                    // make italic

                    fontFamily: 'Signifier',
                    fontSize: '112%',
                    //italic
                    fontWeight: 400,
                  }}
                >
                  impossible to ignore.
                </span>
              </p>
              <p
                className='text-2xl tracking-tight max-w-[640] leading-9'
                style={{
                  // make italic
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
          <div className='max-w-[960] m-auto relative flex items-center gap-4'>
            <a
              href='#'
              className='inline-block px-6 py-3 bg-[#2726E9] text-white rounded-full w-auto font-medium shadow-xl'
            >
              Book a call
            </a>

            <p className='text-sm text-neutral-600'>
              Discuss your project or mentorship.
            </p>
          </div>
        </section>
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
        TBD
      </footer>
    </div>
  );
}
