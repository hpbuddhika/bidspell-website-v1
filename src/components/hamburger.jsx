import React, { useState, useEffect, useRef } from "react"

import { gsap, TweenMax, Power3 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CSSRulePlugin } from "gsap/CSSRulePlugin"

import "./hamburger.scss"

const Hamburger = () => {

  const [isChecked, setCheck] = useState(false);

  const handleChange = event => {
    console.log("handle change called::::::::::::::::;")
    if (event.target.checked) {
      setCheck(true)
      document.body.style.overflow = "hidden"

      gsap.from(mobileNav, {
        x: 1200,
        duration: 0.5,
        opacity: 0,
      })
      gsap.to(mobileNav, {
        x: 0,
        duration: 0.5,
        opacity: 1,
      })
    } else {
      setCheck(false)
      gsap.from(mobileNav, {
        x: 0,
        duration: 1,
        opacity: 1,
      })
      gsap.to(mobileNav, {
        x: 1200,
        duration: 1,
        opacity: 0,
      })
      document.body.style.overflow = "visible"
    }
  }

  let mobileNav = useRef(null)

  useEffect(() => { 
  console.log("inside use effect _____________________")
  },[])

  return (
    <>
      <div className=" h-8 w-8  relative  z-50 ">
        <label className="hamburger-menu h-full w-full">
          <input
            type="checkbox"
            name="menu"
            className="menu-opener"
            checked ={ isChecked ? true : false}
            onChange={handleChange}
          ></input>
          <div className="hamburger-menu__line --top-line"></div>
          <div className="hamburger-menu__line --middle-line"></div>
          <div className="hamburger-menu__line --bottom-line"></div>
        </label>
      </div>
      <div
        ref={el => {
          mobileNav = el
        }}
        className={isChecked ? "bg-white fixed top-0 left-0 right-0 bottom-0 m-0 p-0 h-screen z-10" :"bg-white opacity-0 fixed top-0 left-0 right-0 bottom-0 m-0 p-0 h-screen z-10" }
      >

      </div>
    </>
  )
}

export default Hamburger
 