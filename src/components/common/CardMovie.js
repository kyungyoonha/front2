import React from "react";
import no_img from "../../images/no-img.png";

function CardMovie({ title, menuItems, isLoading }) {
    if (!menuItems || isLoading)
        return (
            <div className="cardList">
                <h2>{title.toUpperCase()}</h2>
                {[...new Array(6)].map((item, i) => (
                    <div key={i} className="cardList__container">
                        <img src={no_img} alt="" />
                        <span>Loading</span>
                    </div>
                ))}
            </div>
        );

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
