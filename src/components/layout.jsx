/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // const [width, setWidth] = React.useState(window.innerWidth)
  // const breakpoint = 1024

  // React.useEffect(() => {
  //   // const handleWindowResize = () => setWidth(window.innerWidth)
  //   // window.addEventListener("resize", handleWindowResize)

  //   // // Return a function from the effect that removes the event listener
  //   // return () => window.removeEventListener("resize", handleWindowResize)
  // }, [])

  return (
    <>
      {/* {width > breakpoint ? document.body.style.overflow = "visible" : null} */}
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="px-2 md:px-0 max-w-screen-xl m-auto overflow-hidden">
        <main className="w-full">{children}</main>
        <footer className="w-full"></footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
