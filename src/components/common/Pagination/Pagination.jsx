import React from 'react'
import s from './Pagination.module.scss'

export const Pagination = ({totalUsersCount, pageSize, currentPage, onPageChange}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    
    return (
        <div className={s.pagi}>
            {currentPage >= 5 ? (
                <span className={s.naviBack} onClick={() => {
                    onPageChange(1)
                }}> Назад </span>
            ) : null}

            {pages
                .slice(currentPage >= 4 ? currentPage - 4 : 0, currentPage + 3)
                .map(p => {
                    return (<span onClick={() => {
                            onPageChange(p)
                        }} className={currentPage === p && s.selected}>{p}
                    </span>
                    )
                })}

            {currentPage === pagesCount ? null : (
                <span className={s.naviNext} onClick={() => {
                    onPageChange(pagesCount)
                }}>Вперед
                </span>
            )}
        </div>
    )
};
