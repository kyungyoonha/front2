import React from "react";

// 텝 메뉴 안에 컨텐츠
function Content({ content }) {
    return (
        <div className="content">
            <div>{content}</div>
        </div>
    );
}

export default Content;
