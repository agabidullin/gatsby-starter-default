import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>Смарт Бизнес</h1>
    <p>Мы помогаем компаниям управлять бизнесом с помощью цифр на единой цифровой платформе</p>
    <p>Мы оцифровываем ресурсы бизнеса в разных отраслях:</p>
    
    {/* <div class="branch">
    <div class="inner">
    <img      
      height={75}
      style={{ margin: 0 }}
      src="https://cdn-icons-png.flaticon.com/128/1048/1048329.png"
    />    
    300 единиц передвижной техники
    </div></div> */}
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
