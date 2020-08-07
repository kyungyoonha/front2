import React, { useState, useEffect, useCallback } from "react";
import SideNavItemSub from "./SideNavItemSub";
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

function SideNavItem({ page }) {
    const currentPage = history.location.pathname.split("/")[1];

    const [open, setOpen] = useState(false);
    const [fix, setFix] = useState(false);

    // currentPage 고정
    useEffect(() => {
        if (currentPage) {
            currentPage === page && setFix(true);
        }
    }, [currentPage, page]);

    // open 마우스 들어올 때
    const handleMouseEnter = useCallback(() => {
        setOpen(true);
    }, []);

    // close 마우스 나갈 때
    const handleMouseLeave = useCallback(() => {
        setOpen(false);
    }, []);

    // 메인 페이지 클릭시
    const handleClickMain = useCallback(() => {
        setFix(!fix);
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
                className="sideNavItem__main"
            >
                <div className="sideNavItem__mainIcon">{IconsMap[page]}</div>
                {page}
            </div>

            {/* 
                메인 페이지 클릭시 오픈 고정, 
                메인 페이지 미클릭시 마우스오버 될 경우 오픈 
            */}
            {fix ? (
                <SideNavItemSub page={page} onClick={handleClickSub} />
            ) : (
                open && <SideNavItemSub page={page} onClick={handleClickSub} />
            )}
        </div>
    );
}

export default React.memo(SideNavItem);
