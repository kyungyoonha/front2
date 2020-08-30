import React from "react";
import Board from "../components/Board/Board";
import PageTemplate from "../components/common/PageTemplate";
// import history from "../history";

// redux
import { useSelector } from "react-redux";
// import Tabs from "../components/common/Tabs";
// import { dataAction_fetch } from "../redux/actions";
import CardList from "../components/common/CardList";

function Page({ match }) {
    const { menuItems } = useSelector((state) => state.menu);
    //const { pageData } = useSelector((state) => state.data);
    // const dispatch = useDispatch();
    const currentPath = match.url;

    // const [itemDepth1, setItemDepth1] = useState("");
    // const [itemDepth2, setItemDepth2] = useState("");

    // useEffect(() => {
    //     const pathSplit = currentPath.split("/");
    //     setItemDepth1("/" + pathSplit[1]);
    //     if (pathSplit.length > 2) {
    //         setItemDepth2("/" + pathSplit[1] + "/" + pathSplit[2]);
    //     } else {
    //         setItemDepth2("");
    //     }
    //     console.log(match.params.id);
    //     dispatch(dataAction_fetch(match.params.id));
    // }, [currentPath, dispatch, match]);

    // const handleClick = (path) => {
    //     history.push(path);
    // };

    const menuItem = menuItems.find((item) => item.path === currentPath);

    return (
        <PageTemplate>
            <div className="pageMain">
                <Board />
                <CardList menuItem={menuItem} />
            </div>
        </PageTemplate>
    );
    // return (
    //     <PageTemplate>
    //         <div className="pageMain">
    //             <Board />
    //             <Tabs
    //                 selectedItem={itemDepth1}
    //                 menuItem={{ children: menuItems }}
    //                 handleClick={handleClick}
    //             >
    //                 <Tabs
    //                     selectedItem={itemDepth2}
    //                     menuItem={menuItem}
    //                     handleClick={handleClick}
    //                 >
    //                     {pageData &&
    //                         pageData.map((item) => (
    //                             <div
    //                                 key={item.productId}
    //                                 className="pageMain__data"
    //                             >
    //                                 <h4>{item.title}</h4>
    //                                 <div
    //                                     className="pageMain__thumbnail"
    //                                     style={{ background: item.color }}
    //                                 ></div>
    //                                 <span>금액: 30000</span>
    //                             </div>
    //                         ))}
    //                 </Tabs>
    //             </Tabs>
    //         </div>
    //     </PageTemplate>
    // );
}

export default Page;
