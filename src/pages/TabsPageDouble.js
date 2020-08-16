import React from "react";
import Tabs from "../components/common/Tabs";
import { data as menuItemsStructure } from "../json/page3Items.json";
import PageTemplate from "../components/common/PageTemplate";

function TabsPageDouble({ history }) {
    const pathname = "/page4";

    return (
        <PageTemplate history={history}>
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
        </PageTemplate>
    );
}

export default TabsPageDouble;
