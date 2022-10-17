import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    
    <nav class="_centermenu">
      <ul class="_6694zp6 _6694zpl _6694zp10">
        <li><a class="_6694zp55" href="/page-2">О компании</a></li>
        <li><a class="_6694zp55" href="/page-3">Команда</a></li>
        <li><a class="_6694zp55" href="/page-4">Решения</a></li>
        <li><a class="_6694zp55" href="/page-5">Контакты</a></li>
        </ul>
    </nav>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
