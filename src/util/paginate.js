export default (items, currentPage, pageSize, keyword) => {
    // 검색 키워드가 제목 또는 컨텐츠에 있는 item만
    const searched = items.filter(
        (item) =>
            item.title.indexOf(keyword) !== -1 ||
            item.content.indexOf(keyword) !== -1 ||
            item.userId.indexOf(keyword) !== -1
    );
    // 날짜 순 정렬
    const sortedData = searched.sort((a, b) =>
        new Date(a.createdAt) > new Date(b.createdAt)
            ? -1
            : new Date(a.createdAt) < new Date(b.createdAt)
            ? 1
            : 0
    );
    // pageSize만큼 자르기
    const startIndex = (currentPage - 1) * pageSize;
    const splicedData = [...sortedData].splice(startIndex, pageSize);
    return splicedData;
};
