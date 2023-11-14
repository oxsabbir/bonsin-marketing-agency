import Section from "./Section";
import business from "../assets/image/business.png";
import styles from "../styles";
import Line from "./Line";
import dropdown from "../assets/svgs/drop.svg";
import { useState } from "react";

const Bussiness = function () {
  const [activeSlide, setActiveSlide] = useState(1);
  return (
    <>
      <Section background={"bg-white"}>
        <div className=" flex flex-col gap-6 md:gap-12 md:flex-row">
          <div className=" md:w-[50%]">
            <div className="m-auto flex flex-col  mb-12 ">
              <h1 className={`${styles.sectionHeading}`}>
                Creating Solutions For Your Business
              </h1>
              <Line />

              <p className={`${styles.sectionPara}`}>
                Nunc nec amet vestibulum. Nunc fringilla, aenean ipsum lorem
                morbi consectetuer aliquam quis, mauris ullamcorper estibulum
                felis.
              </p>
            </div>

            <div className="  flex flex-col gap-1">
              <div>
                <div
                  onClick={() => setActiveSlide(1)}
                  className={`font-poppins text-[18px] text-white p-4 flex justify-between px-6 cursor-pointer ${
                    activeSlide === 1 ? "bg-pinkBg" : "bg-[#FFF2F5]"
                  } `}
                >
                  <h3>Citae interdum ullamcorper turpis</h3>
                  <img src={dropdown} alt="icon" />
                </div>
                <p
                  className={`${styles.sectionPara} ${
                    activeSlide === 1 ? "block" : "hidden"
                  } px-6 my-5`}
                >
                  Mas turpis vestibulum sed. Sem eleifend rhoncus phasellus
                  contetuer magnis in. Ornare sed nibh elit enim, pellentesque
                  dolor, nusit, massa est turpis arcu et nec, sagittis euismod
                  arcu faucibus. Sapien doloaean vitae ante arcu sagittis
                  vestibulum doloribus
                </p>
              </div>
              <div>
                <div
                  onClick={() => setActiveSlide(2)}
                  className={`font-poppins text-[18px] text-white p-4 flex justify-between px-6 cursor-pointer ${
                    activeSlide === 2 ? "bg-pinkBg" : "bg-[#FFF2F5]"
                  } `}
                >
                  <h3>Citae interdum ullamcorper turpis</h3>
                  <img src={dropdown} alt="icon" />
                </div>

                <p
                  className={`${styles.sectionPara} ${
                    activeSlide === 2 ? "block" : "hidden"
                  } px-6 my-5`}
                >
                  Mas turpis vestibulum sed. Sem eleifend rhoncus phasellus
                  contetuer magnis in. Ornare sed nibh elit enim, pellentesque
                  dolor, nusit, massa est turpis arcu et nec, sagittis euismod
                  arcu faucibus. Sapien doloaean vitae ante arcu sagittis
                  vestibulum doloribus
                </p>
              </div>
              <div>
                <div
                  onClick={() => setActiveSlide(3)}
                  className={`font-poppins text-[18px] text-white p-4 flex justify-between px-6 cursor-pointer ${
                    activeSlide === 3 ? "bg-pinkBg" : "bg-[#FFF2F5]"
                  } `}
                >
                  <h3>Citae interdum ullamcorper turpis</h3>
                  <img src={dropdown} alt="icon" />
                </div>
                <p
                  className={`${styles.sectionPara} ${
                    activeSlide === 3 ? "block" : "hidden"
                  } px-6 my-5 duration-300`}
                >
                  Mas turpis vestibulum sed. Sem eleifend rhoncus phasellus
                  contetuer magnis in. Ornare sed nibh elit enim, pellentesque
                  dolor, nusit, massa est turpis arcu et nec, sagittis euismod
                  arcu faucibus. Sapien doloaean vitae ante arcu sagittis
                  vestibulum doloribus
                </p>
              </div>
            </div>
          </div>

          <div className=" md:w-[50%]">
            <img src={business} alt="business" width={"100%"} />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Bussiness;
