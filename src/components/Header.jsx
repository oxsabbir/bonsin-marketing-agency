import styles from "../styles";
import { socialLinks } from "../constant";

import svgIcon from "../assets/svgs/svgIcon";

const Header = function () {
  return (
    <header className="bg-pinkBg text-white flex justify-center">
      <div
        className={`${styles.boxWidth} ${styles.paddingX} sm:py-4 py-2 gap-1 gap flex sm:flex-row flex-col justify-between`}
      >
        <div className="flex  sm:flex-row flex-col sm:gap-12 gap-1 ">
          <div className="flex items-center ">
            <img src={svgIcon.envelope} />
            <h3 className="text-[16px] font-normal font-roboto">
              demo@gmail.com
            </h3>
          </div>
          <div className=" flex items-center">
            <img src={svgIcon.maps} />
            <h3 className="text-[16px] font-normal font-roboto">
              Bahamas, French, Dhaka - 1230
            </h3>
          </div>
        </div>

        <div>
          <ul className=" list-none flex gap-4">
            {socialLinks.map((items, i) => (
              <li key={i}>
                <a href={items.links}>{items.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
