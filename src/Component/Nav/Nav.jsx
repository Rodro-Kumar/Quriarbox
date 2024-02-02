import React from "react";
import Button from "../Common/Button";
import logo from "../../assets/Logo.png";
import { IoIosSearch } from "react-icons/io";

const Nav = () => {
  return (
    <>
      <nav className=" bg-gradient-to-r from-bgnavfrom via-bgvia to-bgnavto shadow-navshadow py-[24px]">
        <div className="container">
          <div className="nav__wraper flex justify-between">
            <div className="nav-left">
              <div>
                <img src={logo} alt={logo} className="absolute top-[27px]" />
              </div>
            </div>
            <div className="nav__right flex items-center">
              <div>
                <ul className="pr-[45px]">
                  <li>
                    <a
                      href="#"
                      className="text-[#817382] font-bold text-[16px] font-Raleway hover:text-[#F95C19] transition-"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-[#817382] font-bold text-[16px] font-Raleway pl-5 hover:text-[#F95C19] transition-all"
                    >
                      Our services
                    </a>
                    <a
                      href="#"
                      className="text-[#817382] font-bold text-[16px] font-Raleway pl-5 hover:text-[#F95C19] transition-all"
                    >
                      About Us
                    </a>
                    <a
                      href="#"
                      className="text-[#817382] font-bold text-[16px] font-Raleway pl-5 hover:text-[#F95C19] transition-all"
                    >
                      What’s new?
                    </a>
                  </li>
                </ul>
              </div>

              <div className=" flex gap-x-2 ">
                <Button className="bg-[#ffeecb] text-[#FFAF0F] py-[10px] px-[14px] rounded text-[35px] hover:bg-[#F6C564] hover:text-[#fff] transition-all">
                  <IoIosSearch />
                </Button>
                <Button className="bg-[#FFE4D9] text-[#F95C19] font-Oxanium font-bold py-[12px] px-[20px] rounded text-[20px] hover:bg-[#e45e29] hover:text-[#fff] transition-all">
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
