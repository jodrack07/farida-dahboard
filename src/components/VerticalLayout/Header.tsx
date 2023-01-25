import React, { useState } from "react";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import { withTranslation } from "react-i18next";

//import drawer
import ReactDrawer from "react-drawer";
import "react-drawer/lib/react-drawer.css";

//import component
import RightSidebar from "../CommonForBoth/RightSidebar";
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";

// Reactstrap
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from "reactstrap";

//import images
import logoSm from "../../assets/images/logo-sm.png";
import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";
import illustrator from "../../assets/images/illustrator/1.png";

import slack from "../../assets/images/brands/slack.png";
import behance from "../../assets/images/brands/behance.png";
import dribbble from "../../assets/images/brands/dribbble.png";
import dropbox from "../../assets/images/brands/dropbox.png";
import mail_chimp from "../../assets/images/brands/mail_chimp.png";
import github from "../../assets/images/brands/github.png";

//Import Icons
import Icon from "@ailibs/feather-react-ts";

const Header = (props: any) => {

  const [isSearch, setSearch] = useState<boolean>(false);
  const [socialDrp, setsocialDrp] = useState<boolean>(false);
  const [position, setPosition] = useState<string>();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [megaMenu, setmegaMenu] = useState(false);
  const [categoryMenu, setcategoryMenu] = useState(false);
  /**
   * Rightsidebar drawer
   */

  const toggleTopDrawer = () => {
    setPosition("right");
    setOpenDrawer(!openDrawer);
  };

  const onDrawerClose = () => {

    setOpenDrawer(false);
  };

  /*** Sidebar menu icon and default menu set */
  function tToggle() {
    var body = document.body;
    if (window.screen.width <= 998) {
      body.classList.toggle("sidebar-enable");
    }
    document.body.setAttribute("data-sidebar-size", "lg");
  }

  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/entreprise" className="logo logo-dark">
                <span className="logo-sm">
                  <img src='' alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logoDark} alt="" height="22" />
                </span>
              </Link>

              <Link to="/entreprise" className="logo logo-light">
                <span className="logo-sm">
                  <img src='' alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logoLight} alt="" height="22" />
                </span>
              </Link>
            </div>

            <button
              onClick={() => {
                tToggle();
              }}
              type="button"
              className="btn btn-sm px-3 font-size-16 header-item vertical-menu-btn"
              id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars"></i>
            </button>

            <Dropdown
              className="d-none d-lg-block ms-2"
              isOpen={megaMenu}
              toggle={() => {
                setmegaMenu(!megaMenu);
              }}
            >
            </Dropdown>

            <Dropdown
              className="dropdown dropdown-mega d-none d-lg-block"
              isOpen={categoryMenu}
              toggle={() => {
                setcategoryMenu(!categoryMenu);
              }}
            >
            </Dropdown>

          </div>

          <div className="d-flex">
            <div className="dropdown d-inline-block">

              <button
                type="button"
                className="btn header-item"
                id="page-header-search-dropdown"
                onClick={() => setSearch(!isSearch)}
              >
                <Icon name="search" className="icon-sm" />
              </button>
              <div
                className={
                  isSearch
                    ? "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 show"
                    : "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                }
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-2">
                  <div className="search-box">
                    <div className="position-relative">
                      <input type="text" className="form-control rounded bg-light border-0" placeholder="Rechercher" />
                      <i className="mdi mdi-magnify search-icon"></i>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <LanguageDropdown />

            <NotificationDropdown />

            <div
              onClick={() => {
                toggleTopDrawer();
              }}
              className="dropdown d-inline-block"
            >
              <button
                type="button"
                className="btn header-item noti-icon right-bar-toggle"
              >
                <Icon
                  name="settings"
                  className="icon-sm"
                />
              </button>
            </div>

            <ProfileMenu />

          </div>
        </div>
      </header>

      <ReactDrawer open={openDrawer} onClose={onDrawerClose} position={position}>
        <RightSidebar
          onClose={onDrawerClose}
        />
      </ReactDrawer>

    </React.Fragment>
  );
};

export default withTranslation()(Header);