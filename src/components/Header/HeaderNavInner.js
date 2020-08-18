import React, { Fragment, useState } from "react";
import ChildMenu2 from "../common/ChildMenu2";
import { NavLink } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

function HeaderNavInner({ menuPath }) {
    const { menuItems } = useSelector((state) => state.menu);
    const [openMenu, setOpenMenu] = useState("");

    const onMouseEnter = (path) => {
        setOpenMenu(path);
    };

    const onMouseLeave = () => {
        setOpenMenu("");
    };

    const menuItem = menuItems.find((item) => item.path === menuPath);
    console.log(menuItem);

    if (!menuItem) {
        return;
    }

    return (
        <div className="headerNavInner">
            <div className="headerNavInner__left">
                {menuItem.children ? (
                    <Fragment>
                        {menuItem.children.map((item) => (
                            <div
                                key={item.path}
                                className="headerNavInner__leftItem"
                            >
                                {item.name}
                            </div>
                        ))}

                        <div className="headerNavInner__leftItem">
                            <i className="fas fa-plus-circle"></i>
                        </div>
                    </Fragment>
                ) : (
                    <div className="headerNavInner__leftItem">
                        <i className="fas fa-plus-circle"></i>{" "}
                    </div>
                )}
            </div>
        </div>
    );
}

export default React.memo(HeaderNavInner);

// return (
//     <div className="headerNavInner">
//         {menuItems.map((item) => {
//             return item.children ? (
//                 <div
//                     key={item.path}
//                     className="headerNavInner__itemList"
//                     onMouseLeave={onMouseLeave}
//                 >
//                     <i className="fas fa-plus-circle"></i>
//                     {item.children
//                         ? item.children.map((item2) => (
//                               // 2차 메뉴
//                               <div
//                                   className="headerNavInner__item"
//                                   key={item2.path}
//                               >
//                                   <NavLink
//                                       to={item.path + item2.path}
//                                       activeClassName="active"
//                                       onMouseEnter={() =>
//                                           onMouseEnter(item2.path)
//                                       }
//                                   >
//                                       {item2.name}
//                                       {item2.children && (
//                                           <i className="fas fa-sort-down headerNavInner__itemMore"></i>
//                                       )}
//                                   </NavLink>
//                                   {/* 3차 메뉴 */}
//                                   {item2.path === openMenu && (
//                                       <div className="headerNavIneer__child">
//                                           <ChildMenu2 menuItem={item2} />
//                                       </div>
//                                   )}
//                               </div>
//                           ))
//                         : null}
//                 </div>
//             ) : (
//                 <div key={item.path} className="headerNavInner__itemList">
//                     <i className="fas fa-plus-circle"></i>
//                 </div>
//             );
//         })}
//     </div>
// );
