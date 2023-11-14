import styles from "../styles";
import Line from "./Line";
const MainHeading = function ({ title, description }) {
  return (
    <>
      <div className="  md:w-[50%] m-auto flex flex-col items-center text-center mb-12 ">
        <h1 className={`${styles.sectionHeading}`}>{title}</h1>
        <Line />

        <p className={`${styles.sectionPara}`}>{description}</p>
      </div>
    </>
  );
};

export default MainHeading;
