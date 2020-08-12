import React from "react";
import { data as menuItemsStructure } from "../json/menuItems.json";

export const getMenuItemsFromPath = (path) => {
    if (path === "/" || !path) {
        return menuItemsStructure;
    }
    // /page3/intro3 => ['', page3, intro3]
    const pathSplit = path.split("/");
    let menuItems = menuItemsStructure;
    for (var i = 1; i < pathSplit.length; i++) {
        let pathItem = pathSplit[i];
        menuItems = menuItems.find((item) => item.url === "/" + pathItem);
    }

    return menuItems;
};

export const makeRandomId = () => {
    var text = "";
    var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};

export const makeOptions = (category) => {
    const optionsList = [];

    if (category === "year") {
        const thisYear = new Date().getFullYear();
        for (var year = thisYear - 1; year >= 1910; year--) {
            optionsList.push(
                <option key={year} value={year}>
                    {year} 년
                </option>
            );
        }
        return optionsList;
    } else if (category === "month") {
        for (var month = 1; month < 13; month++) {
            optionsList.push(
                <option key={month} value={month}>
                    {month} 월
                </option>
            );
        }
    } else if (category === "day") {
        for (var day = 1; day < 32; day++) {
            optionsList.push(
                <option key={day} value={day}>
                    {day} 일
                </option>
            );
        }
    }
    return optionsList;
};

export const makeOptionsDay = (yaer, month) => {};
