interface Props {
  letterClass: string;
  strArray: string[];
  idx: number;
}

function AnimatedLetters({ letterClass, strArray, idx }: Props): JSX.Element {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
}

export default AnimatedLetters;
