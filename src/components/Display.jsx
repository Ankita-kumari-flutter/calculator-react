import styles from './display.module.css'

const Display = ({Displayvalue}) => {
    return (
        <input className={styles.display} type="text" value={Displayvalue} readOnly/>
    )
}

export default Display;