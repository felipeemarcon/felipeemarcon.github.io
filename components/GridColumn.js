import classNames from "classnames";
import PropTypes from "prop-types";

export default function GridColumn({ columns, children }) {
  const classes = classNames("GridColumn__col", {
    [`GridColumn__col--${columns}`]: columns,
  });

  return <div className={classes}>{children}</div>;
}

GridColumn.propTypes = {
  columns: PropTypes.number,
  children: PropTypes.elementType,
};
