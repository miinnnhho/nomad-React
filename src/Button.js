import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}
//class="Button_btn__F4YlC" 이런식으로 랜덤 class가 생성됨. 

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button;
//create-react-app 쓰는 이유는 '분할'
