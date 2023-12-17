import styles from "./Btn.module.css";

const Btn = (props) => {
  return (
    <button
      className={props.isOutline ? styles.outline_btn : styles.primary_btn}
    >
      {props.icon}
      {props.text}
    </button>
  );
};

export default Btn;
