const styles = {
  boxWidth: "xl:max-w-[1440px] w-full",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-[100px] py-[50px]",
  paddingTop: "sm:pt-[100px] pt-[50px]",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  sectionHeading:
    " text-[42px] text-textBlack font-poppins font-bold leading-[56px]",
  sectionPara: " text-textGray font-roboto font-normal leading-7 text-[16px]",

  smallTitle: "font-bold font-poppins text-[22px] text-textBlack",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
