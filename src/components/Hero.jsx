import styles from '../style'
import classNames from 'classnames'
import { homepageHeader } from '../assets'

const Hero = () => {
  return (
    <div className={`bg-primary ${styles.flexStart} min-h-screen`}>
      <section
        id="home"
        className={`flex md:flex-row flex-col py-14 sm:py-32 my-16 relative w-full`}
      >
        <img
          src={homepageHeader}
          aria-hidden={true}
          className="absolute z-0 top-0 left-0 min-w-full min-h-full object-cover"
        />
        <div
          className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 z-10`}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-nohemi font-bold text-center ss:text-[90px] text-[60px] text-dimBlack ss:leading-[100.8px] leading-[75px]">
              Hi, <span className="text-malibu-300">I'm Nat</span>
            </h1>
          </div>

          <p className={`${styles.paragraphCenterMedium} max-w-[900px] mt-10`}>
            a UX designer dedicated to creating <b>simple</b> solutions{' '}
            <br className="sm:block hidden" />
            for a <b>complex</b> world.
          </p>

          <p
            className={`${styles.paragraphCenterMediumHero} max-w-[700px] mt-7`}
          >
            currently studying information experience design at{' '}
            <b>Pratt Institute</b>
            {/* <span className="text-malibu-300">.</span>{" "} */}
          </p>

          <a className={classNames(styles.button, 'mt-12')} href="#studies">
            VIEW MY WORK
          </a>
        </div>
      </section>
    </div>
  )
}

export default Hero
