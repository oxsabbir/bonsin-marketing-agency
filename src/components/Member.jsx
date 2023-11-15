import Section from "./Section";
import { memberContent } from "../constant";

import MainHeading from "./MainHeading";

const Member = function () {
  return (
    <>
      <Section background={"bg-white"} classes={"anim"}>
        <MainHeading
          title={`Meet Our Team Member`}
          description={`  Nunc nec amet vestibulum. Nunc fringilla, aenean ipsum lorem morbi
            consectetuer aliquam quis, mauris ullamcorper estibulum felis.`}
        />
        <div className=" flex flexco md:flex-row flex-wrap  gap-8 justify-center py-10">
          {memberContent.map((item, i) => (
            <div className=" relative flex justify-center" key={i}>
              <img src={item.image} width={"100%"} height={"auto"} />
              <div className=" absolute bottom-6 text-center text-white bg-[#ea3a60cf] px-8 py-5 md:px-12 md:py-8">
                <h3 className=" font-poppins font-bold text-[22px]">
                  {item.name}
                </h3>
                <p className=" font-roboto text-base">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Member;
