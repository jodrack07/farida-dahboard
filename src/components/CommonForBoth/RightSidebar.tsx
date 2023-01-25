import React from "react";

import {
  changeLayout,
  changeLayoutWidth,
  changeLayoutPosition,
  changelayoutMode,
  changeTopbarTheme,
  changeSidebarType,
  changeSidebarTheme,
} from "../../slices/thunks";

//constants
import {
  layoutTypes,
  layoutTheme,
  layoutWidthTypes,
  layoutPositions,
  topBarThemeTypes,
  leftSidebarTypes,
  leftSideBarThemeTypes,
} from "../../constants/layout";

//SimpleBar
import SimpleBar from "simplebar-react";

import { Link } from "react-router-dom";

//redux
import { useSelector, useDispatch } from "react-redux";

const RightSidebar = ({ onClose }: any) => {
  const dispatch = useDispatch();

  const {
    layoutType,
    layoutMode,
  } = useSelector((state: any) => ({
    layoutType: state.Layout.layoutType,
    layoutMode: state.Layout.layoutMode,
    layoutWidth: state.Layout.layoutWidth,
    layoutPosition: state.Layout.layoutPosition,
    topbarTheme: state.Layout.topbarTheme,
    leftSideBarType: state.Layout.leftSideBarType,
    leftSideBarTheme: state.Layout.leftSideBarTheme,
  }));


  return (
    <React.Fragment>
      <div>
        <SimpleBar className="vh-100">

          <div className="rightbar-title d-flex align-items-center bg-dark p-3">
            <h5 className="m-0 me-2 text-white">Theme Customizer</h5>
            <Link
              to="#"
              onClick={onClose}
              className="right-bar-toggle ms-auto"
            >
              <i className="mdi mdi-close noti-icon"></i>
            </Link>
          </div>

          <hr className="m-0" />

          <div className="p-4">
            <h6 className="mb-3 pt-2">Layout Mode</h6>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                id="radioThemeLight"
                name="radioTheme"
                value={layoutTheme.LIGHTMODE}
                className="form-check-input"
                checked={layoutMode === layoutTheme.LIGHTMODE}
                onChange={e => {
                  if (e.target.checked) {
                    dispatch(changelayoutMode(e.target.value, layoutType));
                  }
                }}
              />
              <label className="form-check-label" htmlFor="radioThemeLight">
                Light
              </label>
            </div>
            {"   "}
            <div className="form-check form-check-inline">
              <input
                type="radio"
                id="radioThemeDark"
                name="radioTheme"
                value={layoutTheme.DARKMODE}
                className="form-check-input"
                checked={layoutMode === layoutTheme.DARKMODE}
                onChange={e => {
                  if (e.target.checked) {
                    dispatch(changelayoutMode(e.target.value, layoutType));
                  }
                }}
              />
              <label className="form-check-label" htmlFor="radioThemeDark">
                Dark
              </label>
            </div>
            
          </div>

        </SimpleBar>
      </div>
      <div className="rightbar-overlay" />
    </React.Fragment>
  );
};

export default RightSidebar;