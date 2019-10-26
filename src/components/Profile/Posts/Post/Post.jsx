import React from 'react'
import s from './Post.module.scss'

const Post = props => {
  return (
    <div className={s.block}>
      <img className={s.img} src="https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg" alt="" />

      <div className={s.right}>
        <div className={s.name}>{props.name}</div>
        <div className={s.text}>{props.message}</div>
        <div className={`${s.like} icon-like`}>{props.like}</div>
        <div className={`${s.repost} icon-back-left-arrow-curve-symbol`}>{props.like}</div>
      </div>
    </div>
  )
}

export default Post
