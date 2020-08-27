import React from "react";

function Tabs({ selectedItem, menuItem, handleClick, children }) {
    if (!menuItem) return null;
    const childrenItems = menuItem.children || [];
    return (
        <div className="tabs">
            <div className="tabs__menu">
                {childrenItems.map((item) => {
                    if (item.children) {
                        return (
                            <div
                                key={item.path}
                                onClick={() => handleClick(item.path)}
                                className={`tabs__menuItem ${
                                    item.path ===
                                        (selectedItem
                                            ? selectedItem
                                            : childrenItems[0].path) && "on"
                                }`}
                            >
                                {item.name}
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className="tabs__content">{children}</div>
        </div>
    );
}

export default Tabs;
