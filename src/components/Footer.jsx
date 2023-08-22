import styles from "../style";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col mb-3`}>
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 text-white font-nohemi font-medium text-center ss:text-[32px] text-[24px] text-dimBlack">
          Let's Talk!
        </h1>
      </div>
      <p className={`${styles.paragraphCenter} text-white max-w-[600px]`}>
        Chat with me about anything.
        <br></br>
        <span className="text-dimCyan">nataliec6041@gmail.com</span>
      </p>

    </div>

    <div className="w-full flex justify-center items-center md:flex-row flex-col pt-6">

      <div className="flex flex-row md:mt-0 mt-6">

        {/* facebook */}
        <svg className="mr-24 w-[45px] h-[45px] object-contain cursor-pointer text-white fill-current hover:text-dimCyan" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => window.open("https://www.facebook.com/natalie.cheng.545?mibextid=LQQJ4d")}>
          <path d="M10.5001 0C4.7011 0 0 4.72075 0 10.544C0 15.7667 3.78548 20.092 8.74886 20.9296V12.7437H6.21594V9.79796H8.74886V7.62588C8.74886 5.10564 10.2817 3.73225 12.5209 3.73225C13.5934 3.73225 14.515 3.8125 14.7826 3.84784V6.48217L13.2295 6.48292C12.012 6.48292 11.7773 7.06377 11.7773 7.91643V9.79645H14.6824L14.3035 12.7422H11.7773V21C16.9724 20.3651 21 15.9296 21 10.5409C21 4.72075 16.2989 0 10.5001 0Z"/>
        </svg>

        {/* linkedin */}
        <svg className="mr-24 w-[45px] h-[45px] object-contain cursor-pointer text-white fill-current hover:text-dimCyan" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => window.open("https://www.linkedin.com/in/natalie-cheng02")}>
          <path d="M19.4855 0H1.51453C0.67804 0 0 0.67804 0 1.51453V19.4855C0 20.322 0.67804 21 1.51453 21H19.4855C20.322 21 21 20.322 21 19.4855V1.51453C21 0.67804 20.322 0 19.4855 0V0ZM7.44882 15.873H4.89159V8.17957H7.44882V15.873ZM6.17029 7.12903H6.15363C5.2955 7.12903 4.74051 6.53831 4.74051 5.80003C4.74051 5.04508 5.31248 4.4707 6.18727 4.4707C7.06206 4.4707 7.60039 5.04508 7.61705 5.80003C7.61705 6.53831 7.06206 7.12903 6.17029 7.12903ZM16.6696 15.873H14.1127V11.7572C14.1127 10.7229 13.7425 10.0174 12.8172 10.0174C12.1108 10.0174 11.6901 10.4933 11.5052 10.9526C11.4376 11.117 11.4211 11.3467 11.4211 11.5767V15.873H8.86402C8.86402 15.873 8.89751 8.90135 8.86402 8.17957H11.4211V9.26889C11.7609 8.74466 12.3689 7.99901 13.7257 7.99901C15.4081 7.99901 16.6696 9.09858 16.6696 11.4616V15.873Z"/>
        </svg>

        {/* X */}
        <svg className="w-[45px] h-[45px] object-contain cursor-pointer text-white fill-current hover:text-dimCyan" width="1200" height="1227" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => window.open("https://twitter.com/natchengdesigns")}>
          <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"/>
        </svg>

        {/* twitter */}
        {/* <svg className="w-[45px] h-[45px] object-contain cursor-pointer text-white fill-current hover:text-dimCyan" width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 2.24931C22.1447 2.63077 21.2333 2.88362 20.2831 3.00638C21.2606 2.413 22.0067 1.48054 22.3574 0.356615C21.4461 0.909077 20.4398 1.29931 19.3674 1.51708C18.5021 0.580231 17.2687 0 15.9232 0C13.3127 0 11.2111 2.15431 11.2111 4.79531C11.2111 5.17531 11.2427 5.54069 11.3203 5.88854C7.40025 5.69415 3.93156 3.78392 1.60137 0.874C1.19456 1.59162 0.955938 2.413 0.955938 3.29723C0.955938 4.95754 1.79688 6.42931 3.05037 7.28138C2.29281 7.26677 1.54962 7.04315 0.92 6.69092C0.92 6.70554 0.92 6.72454 0.92 6.74354C0.92 9.07323 2.55444 11.0083 4.69775 11.4541C4.31394 11.5608 3.89562 11.6119 3.4615 11.6119C3.15963 11.6119 2.85487 11.5944 2.56881 11.5301C3.17975 13.4286 4.91338 14.8244 6.97475 14.8697C5.3705 16.1456 3.33356 16.9144 1.12844 16.9144C0.74175 16.9144 0.370875 16.8968 0 16.8486C2.08869 18.2181 4.56406 19 7.2335 19C15.9102 19 20.654 11.6923 20.654 5.358C20.654 5.14608 20.6468 4.94146 20.6367 4.73831C21.5726 4.06308 22.3589 3.21977 23 2.24931Z"/>
        </svg> */}

      </div>
    </div>
  </section>
);

export default Footer;
