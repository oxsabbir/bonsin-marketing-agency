import styles from "../styles";
import logo from "../assets/image/logo.png";
import icons from "../assets/icons";
import { navMenu } from "../constant";

const Nav = function () {
  return (
    <>
      <nav className=" flex justify-center bg-white">
        <div
          className={`${styles.boxWidth} ${styles.paddingX} md:py-6 p-3 flex justify-between items-center `}
        >
          <img src={logo} alt="logo" className=" w-[170px] h-[44px]" />
          <span className="text-2xl md:hidden">{icons.menu}</span>
          <ul className=" list-none  hidden md:flex md:items-center md:gap-2 lg:gap-8 ">
            {navMenu.map((item) => (
              <li
                className=" font-medium hover:translate-y-[3px] duration-300 p-2"
                key={item.title}
              >
                <a href={item.link}>
                  {item.title}{" "}
                  {item.more ? (
                    <span className="inline-block translate-y-[2px] text-[#1f1f1fc9]">
                      {icons.angleDown}
                    </span>
                  ) : (
                    ""
                  )}
                </a>
              </li>
            ))}
            <li className=" hover:translate-y-[3px] duration-300 text-[#1f1f1fc9] p-2 pr-0 cursor-pointer text-xl">
              {icons.search}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
