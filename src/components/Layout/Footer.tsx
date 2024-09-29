import classNames from 'classnames'
import footerBackground from '@/assets/footer-background.png'
import Text from '@/components/Text'

interface FooterProps {
  className?: string
}

/**
 * The website footer, which contains contact information and social media links.
 */
const Footer = ({ className }: FooterProps) => (
  <section
    id="footer"
    className={classNames(
      'flex flex-col justify-center items-center pt-24 pb-10 relative',
      // To cut off background image
      'overflow-y-hidden',
      className,
    )}
  >
    {/* Background image */}
    <img
      src={footerBackground}
      aria-hidden={true}
      className="absolute -z-10 top-0 left-0 min-w-full min-h-full object-cover"
    />

    <h1 className="font-nat text-6xl text-black mt-12">Let's Chat!</h1>
    <Text className="text-black">Talk with me about anything, especially about HK lemon tea.</Text>
    <Text>
      <a
        href="mailto:nataliec6041@gmail.com"
        className="block text-malibu-300 cursor-pointer hover:underline"
      >
        nataliec6041@gmail.com
      </a>
    </Text>

    <div className="flex flex-row gap-12 justify-center items-center pt-6">
      {/* facebook */}
      <a href="https://medium.com/@natjcheng">
      <svg 
          className="w-[45px] h-[45px] object-contain cursor-pointer fill-current hover:text-malibu-300"
          xmlns="http://www.w3.org/2000/svg" 
          width="25"
          height="25"
          fill="none"
          viewBox="0 0 640 512">
        <path d="M180.5 74.3C80.8 74.3 0 155.6 0 256S80.8 437.7 180.5 437.7 361 356.4 361 256 280.2 74.3 180.5 74.3zm288.3 10.6c-49.8 0-90.2 76.6-90.2 171.1s40.4 171.1 90.3 171.1 90.3-76.6 90.3-171.1H559C559 161.5 518.6 84.9 468.8 84.9zm139.5 17.8c-17.5 0-31.7 68.6-31.7 153.3s14.2 153.3 31.7 153.3S640 340.6 640 256C640 171.4 625.8 102.7 608.3 102.7z"/></svg>
      </a>

      {/* X */}
      <a href="https://twitter.com/natchengdesigns">
        <svg
          className="w-[45px] h-[45px] object-contain cursor-pointer fill-current hover:text-malibu-300"
          width="1200"
          height="1227"
          viewBox="0 0 1200 1227"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
        </svg>
      </a>

      {/* linkedin */}
      <a href="https://www.linkedin.com/in/natalie-cheng02">
        <svg
          className="w-[45px] h-[45px] object-contain cursor-pointer fill-current hover:text-malibu-300"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.4855 0H1.51453C0.67804 0 0 0.67804 0 1.51453V19.4855C0 20.322 0.67804 21 1.51453 21H19.4855C20.322 21 21 20.322 21 19.4855V1.51453C21 0.67804 20.322 0 19.4855 0V0ZM7.44882 15.873H4.89159V8.17957H7.44882V15.873ZM6.17029 7.12903H6.15363C5.2955 7.12903 4.74051 6.53831 4.74051 5.80003C4.74051 5.04508 5.31248 4.4707 6.18727 4.4707C7.06206 4.4707 7.60039 5.04508 7.61705 5.80003C7.61705 6.53831 7.06206 7.12903 6.17029 7.12903ZM16.6696 15.873H14.1127V11.7572C14.1127 10.7229 13.7425 10.0174 12.8172 10.0174C12.1108 10.0174 11.6901 10.4933 11.5052 10.9526C11.4376 11.117 11.4211 11.3467 11.4211 11.5767V15.873H8.86402C8.86402 15.873 8.89751 8.90135 8.86402 8.17957H11.4211V9.26889C11.7609 8.74466 12.3689 7.99901 13.7257 7.99901C15.4081 7.99901 16.6696 9.09858 16.6696 11.4616V15.873Z" />
        </svg>
      </a>
    </div>

    <Text className="text-neutral-400 mt-4">coded by Zeke Jeske</Text>
  </section>
)

export default Footer
