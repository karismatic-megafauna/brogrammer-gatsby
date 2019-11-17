import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Woah dude...</h1>
    <p>who said you could come in here?</p>
    <Link to="/">back the fuck up!</Link>
  </Layout>
)

export default SecondPage
