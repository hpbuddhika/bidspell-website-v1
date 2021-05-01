import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/heroSection"
import SolutionGroup1 from "../components/solutionGroup1"
import SolutionGroup2 from "../components/solutionGroup2"
import SolutionGroup3 from "../components/solutionGroup3"
import SolutionGroup4 from "../components/solutionGroup4"
import BidspellHelp from "../components/bidspellHelp"

import { gsap, TweenMax, Power3 } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

const IndexPage = () => {
  React.useEffect(() => {
    // gsap.registerPlugin(ScrollToPlugin) 
    // gsap.to(window, {duration: 2, scrollTo: "#someID"});
  }, [])

  return (
    <>
      <Seo title="Home" />
      <Layout>
        <HeroSection></HeroSection>
        <SolutionGroup1></SolutionGroup1>
        <SolutionGroup2></SolutionGroup2>
        <SolutionGroup3></SolutionGroup3>
        <SolutionGroup4></SolutionGroup4>
        <BidspellHelp></BidspellHelp>
      </Layout>
    </>
  )
}
export default IndexPage
