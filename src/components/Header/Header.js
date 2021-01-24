import React from 'react'
import Logo from '../../images/logo.svg'

// Components
import Container from '../Container/Container'

// Styles
import headerStyles from './header.module.css'

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <Container customClass={headerStyles.headerContainer}>
        <h1 className={headerStyles.brand}>{<img src={Logo} alt="" />}</h1>
      </Container>
    </header>
  )
}
