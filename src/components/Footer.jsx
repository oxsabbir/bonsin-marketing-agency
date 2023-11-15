import styles from "../styles";
import Logo from "../assets/image/logo.png";

import { footerLink } from "../constant";

const Footer = function () {
  return (
    <>
      <footer className={`${styles.flexCenter} ${styles.paddingTop} bg-grayBg`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <div className="flex flex-col md:flex-row justify-between gap-6 pb-4 ">
            <div className=" grow w-full md:w-[50%] sm:p-3 md:p-8">
              <img className=" w-[170px] pb-4" src={Logo} alt="logo" />
              <p className={`${styles.sectionPara}`}>
                Dempor pede libero dapi useu class venenatis ut bibendum quam ut
                nibh necnullam. NonhonPede mollis vel vitae dolorurpis
              </p>
              <h2 className=" font-poppins pt-6 text-[30px] font-bold">
                1111-2222-3333
              </h2>
              <h4 className=" font-roboto font-normal text-[20px]">
                24/7 SUPPORT
              </h4>
            </div>

            <div className=" flex w-full flex-col sm:flex-row sm:grow gap-2 sm:gap-14">
              {footerLink.map((item, i) => (
                <div className=" sm:p-4" key={i}>
                  <h3 className=" font-poppins text-[26px] font-bold pb-5">
                    {item.heading}
                  </h3>
                  <ul>
                    {item.links.map((links, i) => (
                      <li className=" pb-2" key={i}>
                        <a
                          className={`${styles.sectionPara}`}
                          href={links.link}
                        >
                          {links.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className=" flex justify-center p-6">
            <h3 className=" text-base font-roboto font-normal">
              Copyright © 2023. All Rights Reserved
            </h3>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
