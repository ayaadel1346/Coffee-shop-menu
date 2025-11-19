import styles from "./LifeBegin.module.css";

export default function LifeBegin() {
  return (
    <div
      id={styles["life-begin-container"]}
      className="relative h-[70vh] w-full"
      role="img"
      aria-label="Background scene representing the start of a new day with coffee imagery"
    ></div>
  );
}
