import defaultHero from '@/assets/default-hero.png'

const DefaultHero = () => {
  return (
    <img
      src={defaultHero}
      // Specifying width and height prevent the page from shifting when the image loads
      width={1379}
      height={549}
      aria-hidden
      className="w-full mb-12 md:mb-32"
    />
  )
}

export default DefaultHero
