import styles from '../style'
import classNames from 'classnames'
import { homepageHeader } from '../assets'

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex flex-col justify-center items-center mt-16 relative w-full h-full pb-16 px-16`}
      style={{
        minHeight: 'calc(100vh - 4rem - var(--header-height))',
      }}
    >
      {/* Absolutely positioned for background */}
      <img
        src={homepageHeader}
        aria-hidden={true}
        className="absolute -z-10 top-0 left-0 min-w-full min-h-full object-cover mb-8"
      />

      <h1 className="font-nat text-center ss:text-[90px] text-[60px] text-dimBlack ss:leading-[100.8px] leading-[75px]">
        Hi,{' '}
        <span className="text-malibu-300">
          I'm Nat
          <span className="font-nat-symbol" aria-hidden>
            {/* 2 is a moon */}2
          </span>
        </span>
      </h1>

      <p className={`${styles.paragraphCenterMedium} max-w-[900px] mt-10`}>
        a UX designer dedicated to creating <b>simple</b> solutions{' '}
        <br className="sm:block hidden" />
        for a <b>complex</b> world.
      </p>

      <p className={`${styles.paragraphCenterMediumHero} max-w-[700px] mt-7`}>
        currently studying information experience design at{' '}
        <b>Pratt Institute</b>
        {/* <span className="text-malibu-300">.</span>{" "} */}
      </p>

      <a className={classNames(styles.button, 'mt-12')} href="#studies">
        VIEW MY WORK
      </a>
    </section>
  )
}

export default Hero
