import React, { useEffect } from "react";
import ImageCat from "../images/cat.jpg";
import Board from "../components/Board";
import PageTemplate from "../components/common/PageTemplate";

// redux
import { useSelector, useDispatch } from "react-redux";
import { dataAction_fetch } from "../redux/actions";

function Page({ history, user }) {
    console.log("z", user);
    const { pathMain, pathSub } = useSelector((state) => state.path);
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();

    // fetch page data
    useEffect(() => {
        dispatch(dataAction_fetch(pathMain, pathSub));
    }, [dispatch, pathMain, pathSub]);

    return (
        <PageTemplate history={history}>
            <Board />
            <div className="page__title">
                <h1>{data.name}</h1>
            </div>

            <div className="page__img" style={{ backgroundColor: data.color }}>
                <h2>{`${pathSub} 이미지`}</h2>
            </div>
            <div className="page__content">
                설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                설명 설명 설명 설명 설명{" "}
                <img className="page__contentImage" src={ImageCat} alt="" />
                설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                설명 설명
            </div>
        </PageTemplate>
    );
}

export default Page;
