import React, { useEffect, Fragment } from "react";
import ImageCat from "../images/cat.jpg";
import Board from "../components/Board";
import PageTemplate from "../components/common/PageTemplate";

// redux
import { useSelector, useDispatch } from "react-redux";
import { dataAction_fetch } from "../redux/actions";

function Page({ match, location }) {
    const query = new URLSearchParams(location.search);

    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();

    // fetch page data
    useEffect(() => {
        dispatch(dataAction_fetch(match.params.id));
    }, [dispatch, match]);

    return (
        <PageTemplate>
            <Board />
            {data.title && (
                <Fragment>
                    <div className="page__title">
                        <h1>{data.title}</h1>
                    </div>

                    <div
                        className="page__img"
                        style={{ backgroundColor: data.color }}
                    >
                        <h2>{`${data.title} 이미지`}</h2>
                    </div>
                    <div className="page__content">
                        설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                        설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                        설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                        설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                        설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                        설명 설명{" "}
                        <img
                            className="page__contentImage"
                            src={ImageCat}
                            alt=""
                        />
                        설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                        설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                        설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                        설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                        설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                        설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                        설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                        설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                        설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                        설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                        설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                        설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                        설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                        설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                        설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                        설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                        설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                        설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                        설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                        설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                        설명 설명 설명
                    </div>
                </Fragment>
            )}
        </PageTemplate>
    );
}

export default Page;
