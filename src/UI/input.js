const Input = ({
  type,
  placeholder,
  value,
  customeStyle,
  onChange,
  valicationStyle,
  isReadonly
}) => {
  const classes = `defaultInput ${customeStyle} ${valicationStyle}`;
  return (
    <input
      className={classes}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      readOnly={isReadonly}
    />
  );
};

export default Input;
