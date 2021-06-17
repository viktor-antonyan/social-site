import React from "react"
import UsersPagination from "react-js-pagination";

export const Pagination = (props) => {
    // const pageCount = Math.ceil(props.allUsersCount / props.pageSize)
    // const pages = []
    // for (let i = 1; i <= pageCount; i++) {
    //     pages.push(i)
    // }
    const handlePageChange = (pageNumber) => {
        props.btnClick(pageNumber)
    }
    return (
        <UsersPagination
            activePage={props.currentPage}
            itemsCountPerPage={props.pageSize}
            totalItemsCount={props.allUsersCount}
            pageRangeDisplayed={9}
            onChange={handlePageChange}
            itemClass="page-item"
            linkClass="page-link"
        />
        // pages.map((p, i) => <button key={i} onClick={() => props.btnClick(p)}
        //                             className={props.currentPage === p ? style.selected : ''}>
        //     {p}</button>)
    )
}