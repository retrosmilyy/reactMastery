import PropTypes from "prop-types";

function Button({
  children,
  primary,
  secondary,
  success,
  danger,
  warning,
  outline,
  rounded,
}) {


    return (
    <button className="px-3 py-1.5 border border-blue-500 bg-blue-500 text-white">
      {children}
    </button>
  );
}

Button.propTypes = {
  // ✅ lowercase p
  checkVariationValue: ({ primary, secondary, success, danger, warning }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },

  children: PropTypes.node,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
};

export default Button;
