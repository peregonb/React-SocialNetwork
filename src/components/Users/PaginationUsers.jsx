import React from 'react'
import s from './Users.module.scss'

export let PaginationUsers = props => {
  return (
    <div className={s.pagi}>
      {props.currentPage >= 5 ? (
        <span
          className={s.naviBack}
          onClick={() => {
            props.onPageChange(1)
          }}>
          Назад
        </span>
      ) : null}

      {props.pages
        .slice(props.currentPage >= 4 ? props.currentPage - 4 : 0, props.currentPage + 3)
        .map(p => {
          return (
            <span
              onClick={() => {
                props.onPageChange(p)
              }}
              className={props.currentPage === p && s.selected}>
              {p}
            </span>
          )
        })}

      {props.currentPage === props.pagesCount ? null : (
        <span
          className={s.naviNext}
          onClick={() => {
            props.onPageChange(props.pagesCount)
          }}>
          Вперед
        </span>
      )}
    </div>
  )
}
