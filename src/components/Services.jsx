import styles from "../styles";
import { servicesContent } from "../constant";
import Section from "./Section";
import MainHeading from "./MainHeading";

const Services = function () {
  return (
    <>
      <Section background={"bg-grayBg"}>
        <MainHeading
          title={"Our Best Services"}
          description={`  Nunc nec amet vestibulum. Nunc fringilla, aenean ipsum lorem morbi
          consectetuer aliquam quis, mauris ullamcorper estibulum felis.`}
        />

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {servicesContent.map((item, i) => (
            <div className=" bg-white rounded-sm shadow-lg" key={i}>
              <img
                src={item.image}
                alt="image"
                width={"100%"}
                height={"auto"}
              />
              <div className=" p-8">
                <h3 className={`${styles.smallTitle} my-3`}>{item.title}</h3>
                <p className={`${styles.sectionPara}`}>{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Services;
