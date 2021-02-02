import React from 'react'

// Components
import Header from '../components/Header/Header'
import Container from '../components/Container/Container'
import Social from '../components/Social/Social'

// Styles
import homeStyles from './home.module.css'
import 'normalize.css'

export default function Home() {
  return (
    <div>
      <Header />
      <Container customClass={homeStyles.containerMaintenance}>
        <div className="grid-container grid-default">
          <div className={homeStyles.siteMaintenance}>
            <h4>
              <span role="img" aria-label="auhauah">
                🚧
              </span>
              I’m developing my new site. Soon I’ll update here.
              <span role="img" aria-label="auhauah">
                🚧
              </span>
            </h4>
          </div>
        </div>
        <div className="grid-container grid-default">
          <div
            className={`${homeStyles.maintenanceWrapper} ${homeStyles.maintenanceMain}`}
          >
            <div className={homeStyles.maintenanceHeading}>
              <h2 className={homeStyles.contactMeTitle}>
                Do you wanna contact me?
              </h2>
              <div className={homeStyles.contactMeDescription}>
                <p className={homeStyles.contactMeDescriptionText}>
                  I’m free to do some projects as a freelancer designer. We can
                  talk about your ideas.
                </p>
              </div>
            </div>
            <div className={homeStyles.contactMeEmail}>
              <span>Get in touch:</span>
              <a className="defaultLink" href="mailto:oi@felipemarcon.com.br">
                oi@felipemarcon.com.br
              </a>
            </div>
            <Social />
          </div>
        </div>
      </Container>
    </div>
  )
}
