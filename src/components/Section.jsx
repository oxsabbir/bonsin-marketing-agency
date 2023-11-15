import styles from "../styles";

const Section = function ({ children, background, top, id, classes }) {
  return (
    <>
      <section
        id={id}
        className={`${styles.flexCenter}  ${background} ${classes}`}
      >
        <div
          className={`${styles.boxWidth} ${styles.paddingX} ${
            top ? styles.paddingTop : styles.paddingY
          } `}
        >
          {children}
        </div>
      </section>
    </>
  );
};

export default Section;
