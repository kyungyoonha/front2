import React from "react";
import Board from "../components/Board/Board";
import PageTemplate from "../components/common/PageTemplate";

// redux
import { useSelector } from "react-redux";
import CardList from "../components/common/CardList";

function PageMain({ match }) {
    const { menuItems } = useSelector((state) => state.menu);
    const currentPath = match.url;

    const menuItem = menuItems.find((item) => item.path === currentPath);

    return (
        <PageTemplate>
            <div className="pageMain">
                <Board />
                <CardList menuItem={menuItem} />
            </div>
        </PageTemplate>
    );
}

export default PageMain;
