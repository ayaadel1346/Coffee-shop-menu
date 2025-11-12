import styles from "./LoadingCategories.module.css";

export default function LoadingCategories() {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <span id={styles["category-loader"]}></span>
    </div>
  );
}
