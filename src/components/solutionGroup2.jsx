import React, { useRef, useEffect } from "react"

import { gsap, TweenMax, Power3 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CSSRulePlugin } from "gsap/CSSRulePlugin"

import { StaticImage } from "gatsby-plugin-image"

const SolutionGroup2 = () => {
  let image = useRef(null)

  useEffect(() => {
    console.log(image)
    TweenMax.from(image, 3, {
      opacity: 1,
      x: 600,
      ease: Power3.easeOut,
    })
    TweenMax.to(image, 3, {
      opacity: 1,
      // y:60,
      ease: Power3.easeOut,
    })
  })

  return (
    <section>
      <div class="h-full">
        <div class=" h-24 ">
          <div class="text-2xl text-center font-semibold tracking-wider text-gray-600">
            Some Title About the Groups of Solutions. Group Solutiions into
            Themes and Describe like in JWPlayer or Google Admanager
          </div>
        </div>
        <div class="grid grid-flow-col grid-cols-2 h-full">
          <div class=" flex flex-col justify-start">
            <div class="text-2xl text-start font-semibold pt-20 tracking-wider text-gray-500">
              Solution Group 1 that explain benifits to publishers.
            </div>
            <div class="text-lg text-start text-gray-500  tracking-normal pt-10 pb-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div class="m-auto">
            <div
              ref={el => {
                image = el
              }}
              class="opacity-0	"
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
        </div>
      </div>
    </section>
  )
}

export default SolutionGroup2
