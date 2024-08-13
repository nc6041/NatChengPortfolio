import defaultHero from '@/assets/default-hero.png'

const DefaultHero = () => {
  return (
    <img
      src={defaultHero}
      aria-hidden={true}
      className="w-screen mb-12 md:mb-32"
    />
  )
}

export default DefaultHero
