const Model = (props) => {
  return (
    <>
      <div className="modelContainer">
        <div className="backDrop" onClick={props.closingAction}></div>
        <div className="model">{props.children}</div>
      </div>
    </>
  );
};

export default Model;
