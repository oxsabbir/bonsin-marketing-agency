import Section from "./Section";
import MainHeading from "./MainHeading";
import { newsContent } from "../constant";
import calender from "../assets/svgs/calender.svg";
import comment from "../assets/svgs/comment.svg";
import styles from "../styles";

const News = function () {
  return (
    <>
      <Section id={"news"} classes={"anim"}>
        <MainHeading
          title={`Latest News`}
          description={`Nunc nec amet vestibulum. Nunc fringilla, aenean ipsum lorem morbi consectetuer
aliquam quis, mauris ullamcorper estibulum felis.`}
        />

        <div className=" flex flex-wrap gap-7 justify-center flex-col sm:flex-row ">
          {newsContent.map((item, i) => (
            <div
              key={i}
              className=" shadow-lg flex flex-col sm:w-[45%] md:w-[30%]"
            >
              <img
                src={item.image}
                alt="news-image"
                className=" w-[100%] h-auto"
              />
              <div className=" p-6  ">
                <h2 className={`${styles.smallTitle} py-3`}>{item.title}</h2>
                <div
                  className={`${styles.sectionPara} flex py-2 justify-between  border-y border-[#2323233b]`}
                >
                  <span className=" flex gap-2">
                    <img src={calender} width={"16px"} height={"16px"} />
                    {item.date}
                  </span>
                  <span className=" flex gap-2">
                    <img width={"16px"} height={"16px"} src={comment} />{" "}
                    Comments
                  </span>
                </div>
                <h3 className={`${styles.sectionPara} py-3`}>{item.details}</h3>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default News;
