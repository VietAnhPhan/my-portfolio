import wordBackground from "./../wordBackground.module.css";

function WordBackground(props) {
  return (
    <div
      className={`${wordBackground.wordBackground} text-9xl lg:text-[270px]`}
    >
      {props.word}
    </div>
  );
}

export default WordBackground;