import React, { useEffect } from "react";
import Board from "../components/Board";
import PageTemplate from "../components/common/PageTemplate";
import CardMovie from "../components/common/CardMovie";
import { dataAction_fetch } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function PageDetail() {
    const query = new URLSearchParams(window.location.search);
    const genre = query.get("genre");

    const { pageData } = useSelector((state) => state.data);
    const dispatch = useDispatch();

    console.log(pageData);
    useEffect(() => {
        dispatch(dataAction_fetch(genre));
    }, [dispatch, genre]);

    return (
        <PageTemplate>
            <div className="pageMain">
                <CardMovie title={genre} menuItems={pageData} />
                <Board />
            </div>
        </PageTemplate>
    );
}

export default PageDetail;
