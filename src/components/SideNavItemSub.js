import React from "react";
import { NavLink } from "react-router-dom";

const pagesMap = {
    page1: ["product1", "product2", "product3", "product4"],
    page2: ["about1", "about2", "about3"],
    page3: ["intro1", "intro2", "intro3", "intro4"],
    page4: ["price1", "price2", "price3", "price4"],
};

function SideNavItemSub({ page, onClick }) {
    const subPages = pagesMap[page];

    return (
        <div className="sideNavItemSub">
            {subPages.map((subPage) => (
                <NavLink
                    key={subPage}
                    to={`/${page}/${subPage}`}
                    className="sideNavItemSub__link"
                    activeClassName="sideNavItemSub__link_active"
                    onClick={onClick}
                >
                    <span>
                        {"▶ "}
                        {subPage}
                    </span>
                </NavLink>
            ))}
        </div>
    );
}

export default React.memo(SideNavItemSub);
