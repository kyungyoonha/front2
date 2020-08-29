import React from "react";

function CardList({ menuItem }) {
    const children = menuItem.children || [];

    return (
        <div className="cardList">
            <h2>{menuItem.name}</h2>
            {children.map((item) => (
                <div className="cardList__container">
                    <img src="http://localhost:3000/logo192.png" alt="" />
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    );
}

export default CardList;
