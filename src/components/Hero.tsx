import classNames from 'classnames'
import homepageImg from '@/assets/homepage-header.png'
import defaultImg from '@/assets/default-hero.png'
import PageSection from '@/components/PageSection'
import ButtonLink from '@/components/ButtonLink'
import AccentSpan from './AccentSpan'

type HeroProps = {
  title1: React.ReactNode
  /** Rendered in the accent color immediately after title1 */
  title2: React.ReactNode
  /** Renders below the title and above the button. */
  children?: React.ReactNode
  img?: 'homepage' | 'default'
  buttonHref: string
  buttonText: string
}

// DRY code!
export const topId = 'top'

const Hero = ({
  title1,
  title2,
  children,
  img = 'default',
  buttonHref,
  buttonText,
}: HeroProps) => {
  const hrefAttr = buttonHref.startsWith('http') ? 'href' : 'to'

  return (
    <PageSection
      id={topId}
      className="flex flex-col items-stretch text-center"
      fullWidth
      style={{
        minHeight: `calc(100vh - var(--navbar-height))`,
      }}
    >
      {/* This inner div is needed so that the <section/> can have a min-height and the inner div can have a responsive margin-top. */}
      <div className="md:mt-8 flex-1 flex flex-col justify-center items-center py-16 px-8 md:px-16 relative overflow-x-hidden">
        <img
          src={img === 'homepage' ? homepageImg : defaultImg}
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

        <h1 className="font-nat text-8xl sm:text-9xl">
          {title1}
          <AccentSpan>{title2}</AccentSpan>
        </h1>

        {children}

        <ButtonLink
          className={classNames(
            // Add a margin-top to separate the button if there is content between it and the title
            children && 'mt-9',
          )}
          href={buttonHref}
        >
          {buttonText}
        </ButtonLink>
      </div>
    </PageSection>
  )
}

export default Hero
