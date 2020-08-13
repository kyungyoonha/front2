export default (items, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;

    const sortedData = items.sort((a, b) =>
        new Date(a.date) > new Date(b.date)
            ? -1
            : new Date(a.date) < new Date(b.date)
            ? 1
            : 0
    );
    const splicedData = [...sortedData].splice(startIndex, pageSize);

    return splicedData;
};
