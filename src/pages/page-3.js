import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <h1>Смарт Бизнес</h1>
    <p>Смарт Бизнес - сообщество профессионалов, любящих свое дело</p>
    <p>Наша команда состоит из экспертов в отрасли ИТ, аналитики, финансов и управления</p>
    <p>Наши ценности</p>
    <ul>
      <li>Честность</li>
      <li>Открытость</li>
      <li>Эффективность</li>
    </ul>
    <p>Сотрудники</p>
    <div class="employees">    
    <img      
      height={250}
      style={{ margin: 0 }}
      src="https://klike.net/uploads/posts/2020-03/1583661621_1.jpg"
    />    
    <p>Сосновская Евгения</p>
    <p>Генеральный директор</p>
    </div>

    <div class="employees">    
    <img      
      height={250}
      style={{ margin: 0 }}
      src="https://klike.net/uploads/posts/2020-03/1583661605_3.jpg"
    />    
    <p>Зверев Константин</p>
    <p>Руководитель проектов</p>
    </div>

    <div class="employees">    
    <img      
      height={250}
      style={{ margin: 0 }}
      src="https://klike.net/uploads/posts/2020-03/1583661591_35.jpg"
    />    
    <p>Сергеев Юрий</p>
    <p>Системный программист</p>
    </div>

    <div class="employees">    
    <img      
      height={250}
      style={{ margin: 0 }}
      src="https://klike.net/uploads/posts/2020-03/1583661641_36.jpg"
    />    
    <p>Сосновский Глеб</p>
    <p>Руководитель проектов</p>
    </div>

    <div class="employees">    
    <img      
      height={250}
      style={{ margin: 0 }}
      src="https://klike.net/uploads/posts/2020-03/1583661650_10.jpg"
    />    
    <p>Степанов Андрей</p>
    <p>Системный аналитик</p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default ThirdPage
