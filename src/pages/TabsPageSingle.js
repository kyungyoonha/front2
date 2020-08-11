import React from "react";
import Tabs from "../components/common/Tabs";
import { data as menuItemsStructure } from "../page3Items.json";

function TabsPageDouble({ history }) {
    const pathname = "/page3/intro1";

    return (
        <div className="page">
            <div className="page__title">
                <h1>Double Tabs Pages</h1>
            </div>
            <Tabs
                baseurl={pathname}
                menuItems={menuItemsStructure}
                history={history}
            />
        </div>
    );
}

export default TabsPageDouble;
