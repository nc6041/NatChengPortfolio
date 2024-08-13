import classNames from 'classnames'
import homepageHeader from '@/assets/homepage-header.png'
import PageSection from '@/components/PageSection'
import AccentSpan from '@/components/AccentSpan'
import ButtonLink from '@/components/ButtonLink'

const Hero = () => {
  return (
    <PageSection
      id="top"
      className="flex flex-col items-stretch text-center"
      fullWidth
      style={{
        minHeight: `calc(100vh - var(--navbar-height))`,
      }}
    >
      {/* This inner div is needed so that the <section/> can have a min-height and the inner div can have a responsive margin-top. */}
      <div className="md:mt-8 flex-1 flex flex-col justify-center items-center py-16 px-8 md:px-16 relative overflow-x-hidden">
        <img
          src={homepageHeader}
          aria-hidden={true}
          className={classNames(
            'absolute -z-10 top-0 left-0',
            // On short wide screens, the image stretches horizontally to fill the width of the screen
            'h-full w-full',
          )}
          style={{
            // On narrow screens, the image does not shrink horizontally
            minWidth: '150vh',
          }}
        />

        <h1 className="font-nat text-8xl sm:text-9xl ss:leading-[100.8px] leading-[75px]">
          Hi,{' '}
          <AccentSpan>
            I'm Nat
            <span className="font-nat-symbol" aria-hidden>
              {/* 2 is a moon */}2
            </span>
          </AccentSpan>
        </h1>

        <p className="max-w-[900px] text-xl md:text-2xl">
          a UX designer dedicated to creating <b>simple</b> solutions{' '}
          <br className="sm:block hidden" />
          for a <b>complex</b> world.
        </p>

        <p className={`max-w-[700px]`}>
          currently studying information experience design at{' '}
          <b>Pratt Institute</b>
        </p>

        <ButtonLink className="mt-9" to="#studies">
          VIEW MY WORK
        </ButtonLink>
      </div>
    </PageSection>
  )
}

export default Hero
