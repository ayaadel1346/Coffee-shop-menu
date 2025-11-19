import styles from "./MainLoader.module.css";

export default function MainLoader() {
  return (
     <div className="flex justify-center items-center min-h-[80vh]">
        <span id={styles.loader}></span>
     </div>
  )
}
