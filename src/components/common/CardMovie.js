import React from "react";

function CardMovie({ title, menuItems }) {
    if (!menuItems) return <div>로딩중</div>;
    return (
        <div className="cardList">
            <h2>{title.toUpperCase()}</h2>
            {menuItems.map((item) => (
                <div key={item.id} className="cardList__container">
                    <img src={item.medium_cover_image} alt="" />
                    <span>{item.title}</span>
                </div>
            ))}
        </div>
    );
}

export default CardMovie;
