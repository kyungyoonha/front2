import React from "react";
import ImageCat from "../images/cat.jpg";
import Board from "../components/Board";

import { useSelector } from "react-redux";
import { getMenuItemsFromPath } from "../util/functions";

function Page() {
    const { pathMain, pathSub } = useSelector((state) => state.path);

    let contentList;
    if (pathSub) {
        // Get all Sub Contents
        contentList = getMenuItemsFromPath("");
    }

    return (
        <div className="page">
            <div className="page__title">
                <h1>{pathMain || "HOME"}</h1>
            </div>
            <Board />
            <div className="page__img">
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
            {!contentList && (
                <div className="page__content">
                    <img
                        className="page__contentImage"
                        style={{ float: "left", marginLeft: "0" }}
                        src={ImageCat}
                        alt=""
                    />
                    설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                    설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                    설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                    설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                    설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                    설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                    설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                    설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                    설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                    설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                    설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                    설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                    설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                    설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
                    설명
                </div>
            )}
        </div>
    );
}

export default Page;
