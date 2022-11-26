import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/UIReducer/uiSlice";
import styles from "./loader.module.css";

const Loader = ({ data }) => {
  const dispatch = useDispatch();

  let specialClasses = "";

  if (data.status === "error") {
    specialClasses = styles.error;
  }
  if (data.status === "success") {
    specialClasses = styles.success;
  }

  const cssClasses = `${styles.container} ${specialClasses}`;

 

  useEffect(() => {
    if (data.status === "success") {
        dispatch(uiActions.clearLoder());
    }
  }, [data.status, dispatch]);

  return (
    <div className={cssClasses}>
      <h2>{data.title}</h2>
      <p>{data.message}</p>
    </div>
  );
};

export default Loader;
