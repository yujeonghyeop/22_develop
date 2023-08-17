import PropTypes from "prop-types";
import styles from "./Button.module.css";

const test = () => {
    console.log("Testing");
};

function Button({text}) {
    return <button className = {styles.btn}>{text}</button>;
}

Button.propTypes = {text: PropTypes.string.isRequired,}
export default Button;