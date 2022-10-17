import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const FifthPage = () => (
  <Layout>
    <h1>Смарт Бизнес</h1>
    <h2>Адрес</h2>
    <p>г.Казань, ул.Солдатская, д.8, оф 209А</p>
    <h2>Электронная почта</h2>
    <p>info@ismartbusiness.ru</p>    
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default FifthPage
