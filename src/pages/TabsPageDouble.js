import React from "react";
import Tabs from "../components/common/Tabs";
import { data as menuItemsStructure } from "../json/page3Items.json";
import PageContainer from "../components/common/PageContainer";

function TabsPageDouble({ history }) {
    const pathname = "/page4";
    return (
        <PageContainer history={history}>
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
        </PageContainer>
    );
}

export default TabsPageDouble;
