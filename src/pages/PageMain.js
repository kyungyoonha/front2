import React from "react";
import Board from "../components/Board";
import PageTemplate from "../components/common/PageTemplate";

function PageMain() {
    return (
        <PageTemplate>
            <div className="pageMain">
                <Board />
            </div>
        </PageTemplate>
    );
}

export default PageMain;
