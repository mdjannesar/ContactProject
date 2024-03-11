import styles from './Button.module.css';

const Button = (props) => {

//Object destructuring
const {isOutline,icons,text}=props;

  return (
    <button className={isOutline?styles.outline_btn:styles.primary_btn}>
        {icons}
        {text}
    </button>
  )
}


// const Button = (props) => {
//   return (
//     <button className={props.isOutline?styles.outline_btn:styles.primary_btn}>
//         {props.icons}
//         {props.text}
//     </button>
//   )
// }


export default Button


