import React from "react";
import ImageCat from "../img/cat.jpg";
import { defaultData } from "../constants";

function page({ history }) {
    const page = history.location.pathname.split("/")[1] || "page1";
    const pageId = history.location.pathname.split("/")[2] || "product1";
    const color = defaultData.filter((data) => data.productId === pageId)[0]
        .class;

    return (
        <div className="page">
            <div className="page__title">
                <h1>{page}</h1>
            </div>
            <div className={`page__img ${color}`}>
                <h2>{`${pageId} 이미지`}</h2>
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
            <div>
                <img
                    className="page__contentImage"
                    style={{ float: "left", marginLeft: "0" }}
                    src={ImageCat}
                    alt=""
                />
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

export default page;
