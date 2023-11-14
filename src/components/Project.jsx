import Section from "./Section";
import MainHeading from "./MainHeading";
import { projectContent } from "../constant";
import styles from "../styles";

const Project = function () {
  return (
    <>
      <Section background={"bg-white"}>
        <MainHeading
          title={`Our Recent Project`}
          description={`Nunc nec amet vestibulum. Nunc fringilla, aenean ipsum lorem morbi consectetuer
aliquam quis, mauris ullamcorper estibulum felis.`}
        />

        <div className=" md:p-10 flex flex-col sm:flex-row justify-center gap-8 w-full md:w-[80%] m-auto">
          {projectContent.map((item, i) => (
            <div className=" relative shadow-md " key={i}>
              <img
                src={item.image}
                width={"100%"}
                height={"auto"}
                alt="project"
              />
              <div className=" absolute bottom-0 w-full bg-grayBg py-8 text-center">
                <h3 className={styles.smallTitle}>{item.title}</h3>
                <p className={styles.sectionPara}>{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Project;
