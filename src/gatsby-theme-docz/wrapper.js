import React from "react"
import { Helmet } from "react-helmet-async"

const Wrapper = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/png" href="/public/favicon.png" />
      </Helmet>
      {children}
    </>
  )
}

export default Wrapper
