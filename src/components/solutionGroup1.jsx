import React, { useEffect, useRef } from "react"

import { gsap, TweenMax, Power3 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CSSRulePlugin } from "gsap/CSSRulePlugin"

import { StaticImage } from "gatsby-plugin-image"

const SolutionGroup1 = () => {
  let image = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(image, 3, {
      scrollTrigger: {
          trigger : image,
          toggleActions : "play none none none"
      },
      opacity: 0,
      x: -600,
      ease: Power3.easeOut,
    })
    gsap.to(image, 3, {
      scrollTrigger: image,
      opacity: 1,
      ease: Power3.easeOut,
    })
  })

  return (
    <section className="h-full sm:h-screen">
      <div className="flex flex-col h-full items-center justify-center bg-green-400	">
        <div className="bg-red-200">
          <div className="text-lg sm:text-2xl text-center font-semibold tracking-wider text-gray-600">
            Some Title About the Groups of Solutions. Group Solutiions into
            Themes and Describe like in JWPlayer or Google Admanager
          </div>
        </div>
        <div className="grid  sm:grid-flow-col grid-cols-1 sm:grid-cols-2  bg-red-200">
          <div className="m-auto  order-last sm:order-first	">
            <div
              ref={el => {
                image = el
              }}
            >
              <StaticImage
                src="../images/gatsby-astronaut.png"
                width={450}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
              />
            </div>
          </div>
          <div className=" flex flex-col justify-start">
            <div className="text-2xl text-start font-semibold pt-20 tracking-wider text-gray-500">
              Solution Group 1 that explain benifits to publishers.
            </div>
            <div className="text-lg text-start text-gray-500  tracking-normal pt-10 pb-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionGroup1
