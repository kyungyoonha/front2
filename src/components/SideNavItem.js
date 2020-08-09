import React, { useState, useEffect, useCallback } from "react";
import SideNavItemChild from "./SideNavItemChild";
import history from "../history";

//Icons
import HomeIcon from "@material-ui/icons/Home";
import AssessmentIcon from "@material-ui/icons/Assessment";
import BackupIcon from "@material-ui/icons/Backup";
import SettingsIcon from "@material-ui/icons/Settings";

const IconsMap = {
    page1: <HomeIcon className="sideMenu__pageIcon" />,
    page2: <AssessmentIcon className="sideMenu__pageIcon" />,
    page3: <BackupIcon className="sideMenu__pageIcon" />,
    page4: <SettingsIcon className="sideMenu__pageIcon" />,
};

function SideNavItem({ menuItem }) {
    const currentPage = "/" + history.location.pathname.split("/")[1];

    const [open, setOpen] = useState(false);
    const [fix, setFix] = useState(false);

    // currentPage 고정
    useEffect(() => {
        if (currentPage) {
            if (currentPage === menuItem.url) {
                setFix(true);
                setOpen(true);
            }
        }
    }, [currentPage, menuItem.url]);

    // open 마우스 들어올 때
    const handleMouseEnter = useCallback(() => {
        setOpen(true);
    }, []);

    // close 마우스 나갈 때
    // 고정되어 있지 않으면 open=false
    const handleMouseLeave = useCallback(() => {
        if (!fix) {
            setOpen(false);
        }
    }, [fix]);

    // 메인 페이지 클릭시
    const handleClickMain = useCallback(() => {
        setFix(!fix);
        setOpen(true);
    }, [fix]);

    // 서브 페이지 클릭시
    const handleClickSub = useCallback(() => {
        setFix(true);
    }, []);

    return (
        <div onMouseLeave={handleMouseLeave} className="sideNavItem">
            <div
                onMouseEnter={handleMouseEnter}
                onClick={handleClickMain}
                className={`sideNavItem__main ${
                    fix && "sideNavItem__mainTrue"
                }`}
            >
                <div className="sideNavItem__mainIcon">
                    {IconsMap[menuItem.name]}
                </div>
                {menuItem.name}
            </div>

            {open && (
                <SideNavItemChild
                    menuItem={menuItem}
                    onClick={handleClickSub}
                />
            )}
        </div>
    );
}

export default React.memo(SideNavItem);
