import React, { useState } from "react";
import logo from "../../images/logo.jpg";
import { BiChevronDown } from "react-icons/bi";
import { RiArrowUpSLine, RiCloseLine } from "react-icons/ri";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";
import "./nav.css";
const Nav = () => {
  const [dropDown, setDropDown] = useState(false);
  const [nav, setNav] = useState(false);
  return (
    <>
      <header className="md-header">
        <nav className="md-nav">
          <div className="md-left-links">
            <Link to="#" className="md-nav-link">
              Home
            </Link>
            <Link to="#" className="md-nav-link">
              About
            </Link>
            <Link to="#" className="md-nav-link">
              Founder
            </Link>
          </div>
          <div className="md-logo">
            <img src={logo} alt="Dukatech logo" />
          </div>
          <div className="md-right-links">
            <Link
              to="#"
              onMouseEnter={() => {
                setDropDown(true);
              }}
              onClick={() => {
                setDropDown(!dropDown);
              }}
              className="md-nav-link dropdown-link"
            >
              Products {dropDown ? <RiArrowUpSLine /> : <BiChevronDown />}
            </Link>
            {dropDown && (
              <ul
                className="dropdown"
                onMouseEnter={() => {
                  setDropDown(true);
                }}
                onMouseLeave={() => {
                  setDropDown(false);
                }}
              >
                <li>
                  <Link to="#">ShopOkoa</Link>
                </li>
                <li>
                  <Link to="#">Soko Beauty</Link>
                </li>
                <li>
                  <Link to="#">Drive Set</Link>
                </li>
              </ul>
            )}
            <Link to="#" className="md-nav-link">
              Company
            </Link>
            <Link to="#" className="md-nav-button">
              Contact
            </Link>
          </div>
        </nav>
        <nav className="sm-nav">
          <div className="md-logo">
            <img src={logo} alt="Dukatech logo" />

            {nav ? (
              <RiCloseLine onClick={() => setNav(false)} size={40} />
            ) : (
              <HiMenuAlt3 onClick={() => setNav(true)} size={40} />
            )}
          </div>
          {nav && (
            <>
              {" "}
              <Link to="#" className="md-nav-link">
                Home
              </Link>
              <Link to="#" className="md-nav-link">
                About
              </Link>
              <Link to="#" className="md-nav-link">
                Founder
              </Link>
              <Link
                to="#"
                onClick={() => {
                  setDropDown(!dropDown);
                }}
                className="md-nav-link dropdown-link"
              >
                Products {dropDown ? <RiArrowUpSLine /> : <BiChevronDown />}
              </Link>
              {dropDown && (
                <ul className="dropdown-sm">
                  <li>
                    <Link to="#">ShopOkoa</Link>
                  </li>
                  <li>
                    <Link to="#">Soko Beauty</Link>
                  </li>
                  <li>
                    <Link to="#">Drive Set</Link>
                  </li>
                </ul>
              )}
              <Link to="#" className="md-nav-link">
                Company
              </Link>
              <Link to="#" className="md-nav-button">
                Contact
              </Link>
            </>
          )}
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Nav;
