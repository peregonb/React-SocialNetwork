import preloader from '../../../img/preloader.svg'
import s from './preloader.module.scss'
import React from 'react'

let Preloader = props => {
  return <img className={s.preloader} src={preloader} />
}

export default Preloader
