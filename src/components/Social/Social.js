import React from 'react'

// Components
import SocialItem from '../SocialItem/SocialItem'
import DribbbleIcon from '../../images/icons/dribbble.svg'
import BehanceIcon from '../../images/icons/behance.svg'
import LinkedinIcon from '../../images/icons/linkedin.svg'

// Style
import socialStyles from './social.module.css'

export default function Social() {
  const profiles = [
    {
      id: '0',
      title: 'Dribbble',
      url: 'https://dribbble.com/felipee_marcon',
      icon: DribbbleIcon,
    },
    {
      id: '1',
      title: 'Behance',
      url: 'https://behance.com/felipee_marcon',
      icon: BehanceIcon,
    },
    {
      id: '2',
      title: 'Linkedin',
      url: 'https://linkedin.com/felipee_marcon',
      icon: LinkedinIcon,
    },
  ]

  return (
    <div className={socialStyles.socialContainer}>
      {profiles.map(({ id, title, url, icon }) => (
        <SocialItem key={id} name={title} url={url} icon={icon} />
      ))}
    </div>
  )
}
