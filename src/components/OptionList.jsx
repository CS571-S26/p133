function OptionList({ options }) {
  return (
    <ul>
      {options.map((option, index) => (
        <li key={index}>{option}</li>
      ))}
    </ul>
  );
}

export default OptionList;
