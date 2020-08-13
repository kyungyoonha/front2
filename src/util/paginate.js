export default (items, currentPage, pageSize) => {
    console.log("z", items, currentPage, pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
};
