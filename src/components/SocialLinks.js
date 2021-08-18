import PropTypes from "prop-types";
import Link from "next/link";

import Icon from "@components/Icon";

// Styles
import styles from "@styles/components/SocialLinks.module.scss";
import classNames from "classnames";

export default function SocialLinks({ links, type }) {
  const classes = classNames([styles.socialList], {
    [styles.typeHeader]: type === "header",
    [styles.typeFooter]: type === "footer",
  });

  return (
    <ul className={classes}>
      {links.map(({ frontmatter: { link, label, icon } }, index) => {
        return (
          <li key={index}>
            <Link href={link}>
              <a
                target="_blank"
                rel="external noreferrer"
                className={styles.socialItem}
                title={label}
              >
                <Icon icon={icon} color="#fff" size={32} />
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

SocialLinks.defaultProps = {
  links: {},
  type: "header",
};

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string,
};
