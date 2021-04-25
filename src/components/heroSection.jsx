import React, {useRef,useEffect } from "react"

import { gsap, TweenMax, Power3 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CSSRulePlugin } from "gsap/CSSRulePlugin"

import Robot from "../assets/robot.svg"

const HeroSection = () => {
  let robot = useRef(null)

  useEffect(() => {
    TweenMax.from(
      robot,
        3,
        {
            opacity : 1,
            x:600,
            ease :Power3.easeOut
        }

    )
    TweenMax.to(
      robot,
        3,
        {
            opacity : 1,
            ease :Power3.easeOut
        }
    )
  })

  return (
    <section class="h-full min-h-full	 block relative">
      <div class="block relative grid grid-cols-2 gap-4 pt-20">
        <div class="flex items-center justify-center	flex-col	flex-wrap">
          <div class=" pt-32 text-4xl text-start font-semibold 	tracking-wider text-gray-600">
            Every reader is the chance to make an impression
          </div>
          <div class="flex-1 pr-16 pt-16 text-2xl text-start text-gray-400  tracking-normal">
            Bidspell’s publisher platform gives you the power to optimize every
            stage of the mobile experience for higher traffic, engagement, and
            ad revenue
            <div class="pt-8">
              <button class="bg-red-400	 py-2 px-4 mr-4  mb-0 text-white	 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105  hover:bg-red-500	 rounded inline-flex items-center  cursor-pointer">
                <span class="mr-1">Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mt-2 animate-bounce"
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
              <button class="bg-red-400	 py-2 px-4  mb-0 text-white	 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105  hover:bg-red-500	 rounded inline-flex items-center  cursor-pointer">
                <span class="mr-1">Let's Talk</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mt-2 animate-bounce"
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
        <div  class="pt-20 mb-20">
          <div  ref={el => {
                robot = el
              }}>
                  <Robot class  = "opacity-1	" ></Robot>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
