import React from 'react'

// Components
import Header from '../components/Header/Header'
import Container from '../components/Container/Container'

// Styles
import 'normalize.css'
import homeStyles from './home.module.css'

export default function Home() {
  return (
    <div>
      <Header />
      <Container>
        <h4>
          <span role="img" aria-label="auhauah">
            🚧
          </span>
          I’m developing my new site. Soon I’ll update here.
          <span role="img" aria-label="auhauah">
            🚧
          </span>
        </h4>
        <div>
          <h2 className={homeStyles.contactMeTitle}>
            Do you wanna contact me?
          </h2>

          <div className={homeStyles.contactMeDescription}>
            <p className={homeStyles.contactMeDescriptionText}>
              I’m free to do some projects as a freelancer designer. <br />
              We can talk about your ideas.
            </p>
          </div>
          <div className={homeStyles.contactMeEmail}>
            <span>Get in touch:</span>
            <a href="mailto:oi@felipemarcon.com.br">@felipemarcon.com.br</a>
          </div>
        </div>
      </Container>
    </div>
  )
}
