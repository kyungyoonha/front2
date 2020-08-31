import React from "react";
import Board from "../components/Board/Board";
import PageTemplate from "../components/common/PageTemplate";

function Page() {
    return (
        <PageTemplate>
            <div className="pageMain">
                <Board />
            </div>
        </PageTemplate>
    );
}

export default Page;
