import React from "react";
import ImageCat from "../images/cat.jpg";
import Board from "../components/Board";

// redux
import { useSelector } from "react-redux";

function Page() {
    const { pathMain, pathSub } = useSelector((state) => state.path);

    return (
        <div className="page">
            <Board />
            <div className="page__title">
                <h1>{pathMain || "HOME"}</h1>
            </div>

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
        </div>
    );
}

export default Page;
