import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { SetCartTotal } from "../redux/action/CartAdd.action";
import { UserAccessaction } from "../redux/action/UserAccess.action";
import HumbergerMenu from "./HumbergerMenu";

const Header = () => {
  const [CartTotal, setCartTotal] = useState();
  const [menubarToggle, setmenubarToggle] = useState(false);
  const [Bool, setBool] = useState(false);

  const getCartData = useSelector((data) => data.CartAddreducer.cart);
  const getAccessToken = useSelector(
    (key) => key.UserAccessreducer.AccessToken
  );
  const UserEmail = useSelector((key) => key.UserAccessreducer.UserEmail);
  const dispatch = useDispatch();

  // ================== Total of All Cart Price ================
  useEffect(() => {
    const TotalPriceCart = getCartData
      .filter((i) => i.uid == getAccessToken)
      .reduce((accu, curn) => {
        return accu + curn.quantity * curn.price;
      }, 0);
    setCartTotal(TotalPriceCart);
    dispatch(SetCartTotal(TotalPriceCart));
  }, [getCartData]);

  // ================= Login || Logout button Set ===================
  useEffect(() => {
    localStorage.getItem("AccessKey") ? setBool(true) : setBool(false);
  }, []);

  // ================= Logout ==================
  const OnClickLogout = () => {
    localStorage.removeItem("AccessKey");
    dispatch(UserAccessaction(""));
  };

  // ================= Menubar Open ==================
  const humberger__open = () => {
    menubarToggle === true ? setmenubarToggle(false) : setmenubarToggle(true);
  };

  return (
    <>
      <HumbergerMenu
        menubarToggle={menubarToggle}
        getCartData={getCartData}
        CartTotal={CartTotal}
        getAccessToken={getAccessToken}
        Bool={Bool}
        OnClickLogout={OnClickLogout}
        humberger__open={humberger__open}
        UserEmail={UserEmail}
      />
      <div className="humberger__menu__overlay" />
      {/* Header Section Begin */}
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="header__top__left">
                  <ul>
                    <li>
                      <i className="fa fa-user" />{" "}
                      {UserEmail || "hello@gmail.com"}
                    </li>
                    <li>Free Shipping for all Order of $99</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="header__top__right">
                  <div className="header__top__right__social">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest-p" />
                    </a>
                  </div>
                  <div className="header__top__right__language">
                    <img src="img/language.png" alt />
                    <div>English</div>
                    <span className="arrow_carrot-down" />
                    <ul>
                      <li>
                        <a href="#">Spanis</a>
                      </li>
                      <li>
                        <a href="#">English</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header__top__right__auth">
                    {Bool === false ? (
                      <Link to={"/login"}>
                        <i className="fa fa-user" /> Login
                      </Link>
                    ) : (
                      <Link to={"/login"} onClick={OnClickLogout}>
                        <i className="fa fa-user" /> Logout
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
             
                  <img src="img/anylogo.png" alt />
               
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="header__menu">
                <ul>
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <Link to={"/shope"}>Shop</Link>
                  </li>
                  <li>
                    <Link>Pages</Link>
                    <ul className="header__menu__dropdown">
                      <li>
                        <Link to={"/cart"}>Shoping Cart</Link>
                      </li>
                      <li>
                        <Link to={"/checkout"}>Check Out</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={"/blog"}>Blog</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__cart">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-heart" /> <span>1</span>
                    </a>
                  </li>
                  <li>
                    <Link to={"/cart"}>
                      <i className="fa fa-shopping-bag" />{" "}
                      <span>
                        {
                          getCartData.filter((i) => i.uid == getAccessToken)
                            .length
                        }
                      </span>
                    </Link>
                  </li>
                </ul>
                <div className="header__cart__price">
                  item: <span>${CartTotal}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="humberger__open" onClick={humberger__open}>
            <i className="fa fa-bars" />
          </div>
        </div>
      </header>
      {/* Header Section End */}
    </>
  );
};

export default Header;
