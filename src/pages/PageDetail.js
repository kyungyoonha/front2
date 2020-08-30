import React, { useEffect } from "react";
import Board from "../components/Board";
import PageTemplate from "../components/common/PageTemplate";
import CardMovie from "../components/common/CardMovie";
import { dataAction_fetch } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function PageDetail({ match }) {
    const id = match.params.id;
    const { pageData } = useSelector((state) => state.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(dataAction_fetch(id));
    }, [dispatch, id]);

    return (
        <PageTemplate>
            <div className="pageMain">
                <CardMovie title={id} menuItems={pageData} />
                <Board />
            </div>
        </PageTemplate>
    );
}

export default PageDetail;
