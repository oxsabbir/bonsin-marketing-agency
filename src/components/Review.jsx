import Section from "./Section";
import MainHeading from "./MainHeading";
import { reviewContent } from "../constant";
import styles from "../styles";
import quote from "../assets/image/quote.png";

const Review = function () {
  return (
    <>
      <Section background={"bg-white"} top={true} classes={"anim"}>
        <MainHeading
          title={"Our Happy Client"}
          description={`Nunc nec amet vestibulum. Nunc fringilla, aenean ipsum lorem morbi consectetuer
aliquam quis, mauris ullamcorper estibulum felis.`}
        />

        <div className=" flex flex-col md:flex-row gap-4 md:gap-10">
          {reviewContent.map((item, i) => (
            <div
              key={i}
              className=" relative px-6 sm:px-10 sm:py-12 py-10 shadow-xl "
            >
              <div className=" flex justify-between flex-col-reverse gap-5 sm:flex-row md:gap-0">
                <h4
                  className={`${styles.sectionPara} text-center sm:text-start  sm:pr-14`}
                >
                  {item.review}
                </h4>

                <div className="flex flex-col sm:w-[50%] justify-end items-center sm:items-end ">
                  <img src={item.profile} width={"60px"} height={"60px"} />
                  <h2 className=" font-poppins text-[18px] font-bold text-textGray mt-4 mb-1">
                    {item.name}
                  </h2>
                  <p className=" font-roboto text-[14px] text-textGray font-normal uppercase">
                    {item.role}
                  </p>
                </div>
              </div>
              <div className=" absolute top-[10px] right-[10px]">
                <img src={quote} alt="quote" />
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Review;
