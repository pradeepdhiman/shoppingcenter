const Button = ({ children, onPress, btnStyle }) => {
  return (
    <button className={`btn ${btnStyle}`} onClick={onPress}>
      {children}
    </button>
  );
};
export default Button;
