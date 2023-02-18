import React from 'react'
import style from "./Nav.module.css"
import { NavLink } from 'react-router-dom'
function Nav() {
  return (
    <div className={style.wrapper}>
     <NavLink className={style.txt} to={"/BdayCard"}>.</NavLink>
    </div>
  )
}

export default Nav
