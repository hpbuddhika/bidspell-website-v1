import React, { useState, useEffect, useRef } from "react"

import { gsap, TweenMax, Power3 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CSSRulePlugin } from "gsap/CSSRulePlugin"

import "./hamburger.scss"
import MobileAccordion from "./mobileAccordion"

const Hamburger = () => {
  const [isChecked, setCheck] = useState(false)

  const handleChange = event => {
    console.log("handle change called::::::::::::::::;")
    if (event.target.checked) {
      setCheck(true)
      // document.body.style.overflow = "hidden"

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
      // document.body.style.overflow = "visible"
    }
  }

  let mobileNav = useRef(null)

  useEffect(() => {
    console.log("inside use effect _____________________")
  }, [])

  return (
    <>
      <div className=" h-8 w-8  relative  z-50  ">
        <label className="hamburger-menu h-full w-full">
          <input
            type="checkbox"
            name="menu"
            className="menu-opener"
            checked={isChecked ? true : false}
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
        className={
          isChecked
            ? "bg-white fixed top-0 left-0  bottom-0 m-0 p-0 h-full w-80 z-10 overflow-y-scroll	"
            : "bg-white opacity-0 fixed top-0 left-0  bottom-0 m-0 p-0 h-screen w-80 z-10 overflow-y-scroll	"
        }
      >
        <div className="sticky top-0 z-50  w-full h-16 bg-white"></div>
        <div className="h-full w-80  w-full  flex flex-col justify-center items-center ">
          <ul className="h-full  w-full  flex flex-col justify-center items-center ">
            <MobileAccordion></MobileAccordion>
          </ul>
        </div>
        <div className="sticky flex justify-center items-center bottom-0 py-2 px-4 z-50 m-auto w-full h-20 bg-white">
          <button className="bg-red-600 w-full py-2 px-4 animate-bounce	 flex justify-center mb-0 text-white	 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105  hover:bg-red-800	 rounded inline-flex items-center  cursor-pointer">
            <span className="mr-2 text-lg	">Let's Talk</span>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5  animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </button>{" "}
        </div>
      </div>
    </>
  )
}

export default Hamburger
