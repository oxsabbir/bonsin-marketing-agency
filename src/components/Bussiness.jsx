import Section from "./Section";
import business from "../assets/image/business.png";
import styles from "../styles";
import Line from "./Line";
import dropdown from "../assets/svgs/drop.svg";
import rightArrow from "../assets/svgs/right-arrow.svg";
import { useState } from "react";

import { businessFaq } from "../constant";

const Bussiness = function () {
  const [activeSlide, setActiveSlide] = useState(1);
  return (
    <>
      <Section background={"bg-white"} classes={"anim"}>
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
              {businessFaq.map((item, i) => (
                <div key={i}>
                  <div
                    onClick={() => setActiveSlide(i + 1)}
                    className={`font-poppins text-[18px]  p-4 flex justify-between px-5 cursor-pointer ${
                      activeSlide === i + 1
                        ? "bg-pinkBg text-white"
                        : "bg-[#FFF2F5] text-textBlack"
                    } `}
                  >
                    <h3>{item.question}</h3>
                    {activeSlide === i + 1 ? (
                      <img src={dropdown} alt="icon" />
                    ) : (
                      <img src={rightArrow} alt="icon" />
                    )}
                  </div>
                  <div>
                    <p
                      className={`${styles.sectionPara} ${
                        activeSlide === i + 1 ? "block" : "hidden"
                      } px-5 my-5`}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
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
