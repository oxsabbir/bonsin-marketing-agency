import hero from "../assets/image/hero.png";
import styles from "../styles";
import Button from "./ui/Button";

import ButtonTrans from "./ui/ButtonTrans";
const Hero = function () {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className=" h-[751px] flex justify-center"
      >
        <div
          className={`${styles.boxWidth} ${styles.paddingX} flex items-center  h-full text-white`}
        >
          <div className="w-full flex flex-col gap-4 lg:gap-5 md:w-[50%]">
            <h4 className=" uppercase text-[18px] font-normal  font-roboto ">
              success your business
            </h4>
            <h1 className=" uppercase font-poppins font-bold text-[55px]">
              business growth
            </h1>
            <p className=" leading-8 font-roboto text-base font-normal">
              Sociosqu tenetur at, nam feugiat, at pellentesque diam ligula.i
              fusce adipiscing eget molestiae blanditiis fugit repudiandae totam
              fuga.
            </p>
            <div className=" flex gap-6 mt-1">
              <Button>What we do</Button>
              <ButtonTrans>Contact us</ButtonTrans>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
