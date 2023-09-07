import styles from "../style";
import { arrowUp } from "../assets";

// const pdfFile = 'natsresume.pdf'
const AboutMe = () => {
  // const downloadFileAtURL=(url)=>{
  //   const aTag = document.createElement('a')
  //   aTag.href=url
  //   aTag.setAttribute('download', '')
  //   document.body.appendChild(aTag)
  //   aTag.click()
  //   aTag.remove()
  // }
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-nohemi font-bold text-start ss:text-[72px] text-[60px] text-dimBlack ss:leading-[100.8px] leading-[75px]">
            about{" "}
            <span className="text-dimCyan">me</span>
          </h1>
        </div>

        <p className={`${styles.paragraph} mt-10`}>
          I'm currently a senior pursuing a B.A. in{" "}
          <span className="text-dimCyan font-bold ">computer science</span>{" "}
          and{" "}
          <span className="text-dimCyan font-bold ">graphic design</span>{" "}
          certificate at{" "}
          <span className="text-dimCyan font-bold ">UW-Madison</span>
          .
        </p>

        <p className={`${styles.paragraph} mt-7`}>
          My most recent role was at ULINE as a web design intern where I created
          brand-consistent designs for their web homepage, internal platform, and emails
          to increase user engagement with the site and product sales across multiple
          industries. 
        </p>
        
        <p className={`${styles.paragraph} mt-7`}>
          I grew up loving all things creative and was raised in a culture that's all about
          caring for others. In college, I discovered the field of user experience design
          where I fell in love with the concept of designing for people. It was the perfect
          professional intersection between my passions and my skills. 
        </p>

        {/* <button onClick={()=>{downloadFileAtURL(pdfFile)}} type="button" className={`mt-10 py-2 px-8 font-poppins cursor-pointer font-semibold text-[18px] text-dimCyan rounded-[10px] border border-dimCyan resume-button `}>
            Resume
        </button> */}

        {/* <p onClick={()=>{downloadFileAtURL(pdfFile)}} className="text-dimCyan mt-6 flex cursor-pointer">
          View Resume
          <img src={arrowUp} alt="viewstudy" className="-translate-x-5 w-[70px] h-[18px] rotate-40 mt-1" />
        </p> */}

        {/* <p onClick={() => window.open("https://drive.google.com/file/d/1OHuqarcNXapF3gIT-WfRb6nOd6vDGxBq/view?usp=sharing")} className="text-dimCyan mt-6 flex cursor-pointer font-bold">
          View Resume
          <img src={arrowUp} alt="viewstudy" className="-translate-x-5 w-[70px] h-[18px] rotate-40 mt-1" />
        </p> */}

        <button onClick={() => window.open("https://drive.google.com/file/d/1OHuqarcNXapF3gIT-WfRb6nOd6vDGxBq/view?usp=sharing")} type="button" className={`mt-10 py-2 pl-5 pr-7 font-poppins cursor-pointer font-semibold text-[18px] hover:text-dimBlack text-primary rounded-[10px] hover:bg-dimHover bg-dimBlack flex`}>
          View Resume
          <svg className="translate-x-2 w-[25px] h-[25x]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
            <path className="stroke-1 stroke-current" fill="#101413" d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"/>
          </svg>
        </button>

      </div>

    </section>
  );
};

export default AboutMe;
