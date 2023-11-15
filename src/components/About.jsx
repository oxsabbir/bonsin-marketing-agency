import { aboutContent } from "../constant";
import aboutImage from "../assets/image/about.png";
import styles from "../styles";
import Section from "./Section";
const About = function () {
  return (
    <>
      <Section background={"bg-white"} id={"about"} classes={"anim"}>
        <div className="flex md:flex-row flex-col gap-6 md:gap-8">
          {aboutContent.map((item, i) => (
            <div
              id="list-of-about"
              className="hover:shadow-lg duration-300 hover:cursor-pointer rounded-lg flex  justify-center flex-col items-center text-center gap-4 py-8 px-6"
              key={i}
            >
              <div className=" bg-pinkBg rounded-[50%]">
                <img className="p-[20px]" src={item.icon} />
              </div>
              <h2 className={`${styles.smallTitle}`}>{item.title}</h2>
              <p className=" text-textGray font-roboto leading-7">
                {item.details}
              </p>
            </div>
          ))}
        </div>

        <div className=" mt-20  flex flex-col md:flex-row gap-10">
          <div className="">
            <img
              src={aboutImage}
              alt="about-image"
              width={"100%"}
              height={"auto"}
            />
            <div className=" text-white bg-pinkBg py-6 flex flex-col items-center text-center">
              <h2 className=" font-poppins text-[74px] font-bold">24</h2>
              <p className=" uppercase font-poppins text-[22px] font-normal">
                YEARS OF TRUST AND EXCELLENCE
              </p>
            </div>
          </div>
          <div className=" md:w-2/4 w-full flex flex-col  justify-center md:justify-start text-center md:text-start pr-4 md:items-start items-center ">
            <h2 className={`${styles.sectionHeading}  `}>
              Creating Solutions For Your Business
            </h2>
            <div className=" bg-pinkBg h-[2px] w-[80px] rounded-sm mb-5 mt-2 "></div>

            <p className={`${styles.sectionPara} mb-3 `}>
              Lorem ipsum dolor sit amet coynsectetur adipisicing elit. Unde
              quisquam assumenda excepturi nulla reprehenderit, vero quod alias
              saepe quaerat illo dicta illum est repudiandae aspernatur
              architecto perferendis quae accusamus sunt. ipsum dolor sit, amet
              consectetur adipisicing elit.
            </p>
            <p className={`${styles.sectionPara} mb-8`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              impedit a illum. Adipisci repudiandae impedit maiores, pariatur
              minus dolores animi quam dolore voluptatum accusamus sed ea
              deleniti dolor in. Animi.
            </p>

            <button className=" bg-transparent text-pinkBg hover:bg-pinkBg hover:text-white hover:border-pinkBg duration-300 w-[150px] border-[1px] border-pinkBg  p-3 px-7 text-base font-roboto font-medium rounded-sm ">
              Read More
            </button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
