const styles = {
  boxWidth: 'xl:max-w-[1280px] w-full',

  paragraphSkills:
    'font-work-sans font-normal ss:text-[20px] text-[18px] leading-[60px]',
  paragraphCenter:
    'font-work-sans font-normal text-center ss:text-[16px] text-[14px] leading-[30.8px]',
  subtext:
    'font-work-sans font-normal text-dimGrey ss:text-[16px] text-[16px] mt-2',
  button:
    'rounded border-2 border-malibu-300 px-5 py-2.5 uppercase text-[16px] text-malibu-300 hover:text-white hover:bg-malibu-300 transition-colors',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',
  flexEnd: 'flex justify-evenly items-start',
  flexColumns: 'flex items-start',

  paddingX: 'sm:px-16 px-6',
  paddingY: 'sm:py-16 py-6',
  padding: 'sm:px-16 px-6 sm:py-12 py-4',

  marginX: 'sm:mx-16 mx-6',
  marginY: 'sm:my-16 my-6',
}

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
