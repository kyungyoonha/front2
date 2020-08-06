import React, { useState, useCallback } from "react";
import SideNavItem from "./SideNavItem";

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

function SideNavList({ page }) {
    const [open, setOpen] = useState(false);
    const [fix, setFix] = useState(false);

    const handleMouseEnter = useCallback(() => {
        setOpen(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setOpen(false);
    }, []);

    const handleClickMain = useCallback(() => {
        setFix(!fix);
    }, [fix]);

    const handleClickSub = useCallback(() => {
        setFix(true);
    }, []);

    return (
        <div onMouseLeave={handleMouseLeave} className="sideNavList">
            <div
                onMouseEnter={handleMouseEnter}
                onClick={handleClickMain}
                className="sideNavList__box"
            >
                <div className="sideNavList__boxIcon">{IconsMap[page]}</div>
                {page}
            </div>

            {fix ? (
                <SideNavItem page={page} onClick={handleClickSub} />
            ) : (
                open && <SideNavItem page={page} onClick={handleClickSub} />
            )}
        </div>
    );
}

export default React.memo(SideNavList);
