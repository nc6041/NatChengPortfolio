import styles from "../style";

const pdfFile = 'natsresume.pdf'
const AboutMe = () => {
  const downloadFileAtURL=(url)=>{
    const aTag = document.createElement('a')
    aTag.href=url
    aTag.setAttribute('download', '')
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-bold text-start ss:text-[72px] text-[60px] text-dimBlack ss:leading-[100.8px] leading-[75px]">
            about{" "}
            <span className="text-dimCyan">me</span>
          </h1>
        </div>

        <p className={`${styles.paragraph} mt-10`}>
          I'm currently a senior pursuing a B.A. in{" "}
          <span className="text-dimCyan">computer science</span>{" "}
          and{" "}
          <span className="text-dimCyan">graphic design</span>{" "}
          certificate at{" "}
          <span className="text-dimCyan">UW-Madison</span>
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

        <button onClick={()=>{downloadFileAtURL(pdfFile)}} type="button" className={`mt-10 py-2 px-8 font-poppins font-semibold text-[18px] text-dimCyan rounded-[10px] border border-dimCyan resume-button `}>
            Resume
        </button>

      </div>

    </section>
  );
};

export default AboutMe;
