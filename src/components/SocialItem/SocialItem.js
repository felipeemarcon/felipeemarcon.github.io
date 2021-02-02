import React from 'react'

import socialItemStyles from './socialItem.module.css'

export default function SocialItem({ name, url, icon }) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={url}
      title={name}
      className={socialItemStyles.socialItemContainer}
    >
      <img src={icon} alt={name} />
    </a>
  )
}
