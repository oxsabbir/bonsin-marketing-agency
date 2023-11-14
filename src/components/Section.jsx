import styles from "../styles";

const Section = function ({ children, background }) {
  return (
    <>
      <section className={`${styles.flexCenter}  ${background}`}>
        <div
          className={`${styles.boxWidth} ${styles.paddingX} ${styles.paddingY} `}
        >
          {children}
        </div>
      </section>
    </>
  );
};

export default Section;
