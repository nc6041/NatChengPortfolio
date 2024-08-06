import styles from '../style'
import classNames from 'classnames'
import { homepageHeader } from '../assets'

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-stretch gap-3 text-center min-h-screen"
      style={{
        minHeight: `calc(100vh - var(--navbar-height))`,
      }}
    >
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
          <span className="text-malibu-300">
            I'm Nat
            <span className="font-nat-symbol" aria-hidden>
              {/* 2 is a moon */}2
            </span>
          </span>
        </h1>

        <p className="max-w-[900px] text-xl md:text-2xl">
          a UX designer dedicated to creating <b>simple</b> solutions{' '}
          <br className="sm:block hidden" />
          for a <b>complex</b> world.
        </p>

        <p className={`max-w-[700px]`}>
          currently studying information experience design at{' '}
          <b>Pratt Institute</b>
          {/* <span className="text-malibu-300">.</span>{" "} */}
        </p>

        <a className={classNames(styles.button, 'mt-9')} href="#studies">
          VIEW MY WORK
        </a>
      </div>
    </section>
  )
}

export default Hero
