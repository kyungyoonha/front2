import React, { useState, useEffect } from "react";
import Content from "./Content";

function Tabs({ baseurl, menuItems, children, history }) {
    const [path, setPath] = useState("");
    const currentPath = history.location.pathname;

    // 처음 클릭 & 대메뉴 클릭시 => 기본 아이템 띄움
    // path: /page3/intro4       => item1 => product1
    // path: /page3/intro4/item1 => item1 => product1
    // path: /page3/intro4/item2 => item2 => detail1
    // path: /page3/intro4/item3 => item3 => about1
    // path: /page3/intro4/item4 => item4 => package1
    useEffect(() => {
        const menuItem = menuItems.filter(
            (item) => currentPath.indexOf(item.url) > -1
        )[0];

        menuItem ? setPath(menuItem.url) : setPath(menuItems[0].url);
    }, [currentPath, menuItems]);

    if (!path) return <div>loading...</div>;

    // 클릭시 path 변경 및 url 주소 변경
    const onClick = (newPath) => {
        setPath(newPath);
        history.push(baseurl + newPath);
    };

    return (
        <div className="tabs">
            <div className="tabs__menu">
                {menuItems.map((item) => {
                    const active = item.url === path && "active";
                    return (
                        <div
                            key={item.name}
                            className={`tabs__menuItem ${active}`}
                            onClick={() => onClick(item.url)}
                        >
                            {item.name}
                        </div>
                    );
                })}
            </div>
            <div className="tabs__content">
                {/* 
                    Tabs 컴포넌트 안에 children(Tabs) Component가 있는 경우 
                    Props를 변경해서 children(Tabs) Component에 Props로 넘겨준다.
                */}
                {children ? (
                    React.cloneElement(children, {
                        baseurl: baseurl + path,
                        menuItems: menuItems.filter(
                            (items) => items.url === path
                        )[0].children,
                        history: history,
                        currentPath: path,
                    })
                ) : (
                    <Content content={path} />
                )}
            </div>
        </div>
    );
}

export default Tabs;
