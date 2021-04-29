import React, { useRef, useEffect } from "react"

import { gsap, TweenMax, Power3 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CSSRulePlugin } from "gsap/CSSRulePlugin"

import Robot from "../assets/robot.svg"

const HeroSection = () => {
  let robot = useRef(null)

  useEffect(() => {
    gsap.from(robot, {
      x: 400,
      duration: 3,
    })
    gsap.to(robot, {
      x: 0,
      duration: 3,
    })
  })

  return (
    <section className="h-full relative block">
      <div className="flex h-full items-center justify-center bg-green-200	">
        <div className="grid grid-rows-1 sm:grid-cols-2 sm:gap-4 bg-red-400 h-full ">
          <div className="flex order-last sm:order-first flex-col	 bg-yellow-100">
            <div className="sm:pt-32 text-lg md:text-3xl lg:text-4xl text-center sm:text-start font-semibold 	tracking-wider text-gray-600">
              Every reader is the chance to make an impression
            </div>
            <div className="flex-1 sm:pr-16 pt-8 sm:pt-16 text-base	 lg:text-2xl  text-center sm:text-start text-gray-400  tracking-normal">
              Bidspell’s publisher platform gives you the power to optimize
              every stage of the mobile experience for higher traffic,
              engagement, and ad revenue
              <div className="pt-8 text-center	">
                <button className="bg-red-400	 py-2 px-4 mr-4  mb-0 text-white	 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105  hover:bg-red-500	 rounded inline-flex items-center  cursor-pointer">
                  <span className="mr-1">Learn More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-2 animate-bounce"
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
                  </svg>
                </button>
                <button className="bg-red-400	 py-2 px-4  mb-0 text-white	 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105  hover:bg-red-500	 rounded inline-flex items-center  cursor-pointer">
                  <span className="mr-1">Let's Talk</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-2 animate-bounce"
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
                  </svg>
                </button>{" "}
              </div>
            </div>
          </div>
          <div className="pt-20 sm:mb-20">
            <div
              ref={el => {
                robot = el
              }}
            >
              <Robot className="opacity-1	bg-yellow-200"></Robot>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
