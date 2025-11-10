import SouthIcon from '@mui/icons-material/South';import styles from "./scrollingArrow.module.css";

function ScrollingArrow() {
  function handleClick() {
    window.scrollTo(0, 500);
  }

  return (
    <>
      <SouthIcon
        fontSize="large"
        className={`${styles.scrollingArrow}`}
        onClick={handleClick}
      />
    </>
  );
}

export default ScrollingArrow;
