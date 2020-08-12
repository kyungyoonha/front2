import React from "react";
import Tabs from "../components/common/Tabs";
import { data as menuItemsStructure } from "../json/page3Items.json";

function TabsPageDouble({ history }) {
    const pathname = "/page3/intro2";
    return (
        <div className="pageTabs">
            <div></div>
            <div className="page__title">
                <h1>Double Tabs Pages</h1>
            </div>
            <Tabs
                baseurl={pathname}
                menuItems={menuItemsStructure}
                history={history}
            >
                <Tabs />
            </Tabs>
        </div>
    );
}

export default TabsPageDouble;
