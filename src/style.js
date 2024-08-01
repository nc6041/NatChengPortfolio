const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading1:
    "font-nohemi font-semibold xs:text-[45px] text-[50px] text-dimBlack xs:leading-[76.8px] leading-[66.8px] w-full",
  heading3:
    "font-nohemi font-mediumn xs:text-[40px] text-[30px] text-dimBlack xs:leading-[76.8px] leading-[66.8px] w-full",
  heading2:
    "font-nohemi font-semibold xs:text-[36px] text-[36px] text-dimBlack xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-work-sans font-normal text-dimBlack ss:text-[22px] text-[14px] leading-[40px]",
  paragraphSkills:
    "font-work-sans font-normal text-dimBlack ss:text-[20px] text-[18px] leading-[60px]",
  paragraphCenterMedium:
    "font-work-sans font-medium text-dimBlack text-center ss:text-[24px] text-[14px] leading-[30.8px]",
  paragraphCenterMediumHero:
    "font-work-sans font-normal text-dimBlack text-center ss:text-[17px] text-[14px] leading-[30.8px]",
  paragraphCenter:
    "font-work-sans font-normal text-dimBlack text-center ss:text-[16px] text-[14px] leading-[30.8px]",
  subtext:
    "font-work-sans font-normal text-dimGrey ss:text-[16px] text-[16px] mt-2",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexEnd: "flex justify-evenly items-start",
  flexColumns: "flex items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
