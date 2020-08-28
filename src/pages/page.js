import React, { useEffect, useCallback, useState } from "react";
import Board from "../components/Board";
import PageTemplate from "../components/common/PageTemplate";
import history from "../history";

// redux
import { useSelector, useDispatch } from "react-redux";
import Tabs from "../components/common/Tabs";
import { dataAction_fetch } from "../redux/actions";

function Page({ match }) {
    const { menuItemsAll } = useSelector((state) => state.menu);
    const { pageData } = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const currentPath = match.url;

    const [itemDepth1, setItemDepth1] = useState("");
    const [itemDepth2, setItemDepth2] = useState("");

    useEffect(() => {
        const pathSplit = currentPath.split("/");
        setItemDepth1("/" + pathSplit[1]);
        if (pathSplit.length > 2) {
            setItemDepth2("/" + pathSplit[1] + "/" + pathSplit[2]);
        } else {
            setItemDepth2("");
        }

        dispatch(dataAction_fetch(match.params.id));
    }, [currentPath, dispatch, match]);
    // // fetch page data
    // useEffect(() => {
    //     // dispatch(menuAction_fetch(match.url));
    // }, [dispatch, match]);

    // const handleClick = (path) => {
    //     history.push(path);
    // };

    // const selectedItem = useCallback(() => {
    //     const data = menuItems.find((item) => item.path === match.url);
    //     if (data) {
    //         return data;
    //     } else {
    //         if (menuItems) {
    //             return menuItems[0];
    //         }
    //         return { name: "", path: "" };
    //     }
    // }, [menuItems, match]);

    // if (menuItems.length === 0 || match.url === "/") {
    //     return (
    //         <PageTemplate>
    //             <div className="pageMain">
    //                 <Board />
    //             </div>
    //         </PageTemplate>
    //     );
    // }

    const handleClick = (path) => {
        history.push(path);
    };

    const menuItem = menuItemsAll.find((item) => item.path === itemDepth1);

    return (
        <PageTemplate>
            <div className="pageMain">
                <Board />
                <Tabs
                    selectedItem={itemDepth1}
                    menuItem={{ children: menuItemsAll }}
                    handleClick={handleClick}
                >
                    <Tabs
                        selectedItem={itemDepth2}
                        menuItem={menuItem}
                        handleClick={handleClick}
                    >
                        {pageData &&
                            pageData.map((item) => (
                                <div
                                    key={item.productId}
                                    className="pageMain__data"
                                >
                                    <h4>{item.title}</h4>
                                    <div
                                        className="pageMain__thumbnail"
                                        style={{ background: item.color }}
                                    ></div>
                                    <span>금액: 30000</span>
                                </div>
                            ))}
                    </Tabs>
                </Tabs>
            </div>
        </PageTemplate>
    );
}

export default Page;

/*
<div className="tabs">
                    <div className="tabs__menu">
                        {Object.keys(menuItems).length !== 0 &&
                            menuItems.map((item) => {
                                return (
                                    <div
                                        className={`tabs__menuItem ${
                                            item.path === selectedItem().path &&
                                            "on"
                                        }`}
                                        key={item.path}
                                        onClick={() => handleClick(item.path)}
                                    >
                                        {item.name}
                                    </div>
                                );
                            })}
                    </div>
                    <div className="tabs__content">{selectedItem().name}</div>
                </div>

*/
