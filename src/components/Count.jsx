import countBackground from "../assets/image/member/client.png";
import { countContent } from "../constant";
import styles from "../styles";

const Count = function () {
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient( #ea3a60af, #ea3a60af),url("${countBackground}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" flex justify-center"
      >
        <div
          className={`${styles.boxWidth} ${styles.paddingX} md:py-16 py-10 grid grid-cols-1 gap-4 md:gap-8 sm:grid-cols-2 md:grid-cols-4 text-white text-center `}
        >
          {countContent.map((item, i) => (
            <div key={i} className="">
              <h1 className=" font-poppins text-[72px] font-bold">
                {item.number}
              </h1>
              <p className=" font-roboto text-[18px] uppercase">{item.area}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Count;
