import "./App.css";
import { useState } from "react";

// RadioGroup component
function RadioGroup({ onChange, selected, children }) {
  const RadioOptions = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      checked: child.props.value === selected,
      onChange: () => onChange(child.props.value),
    });
  });

  return <div>{RadioOptions}</div>;
}

// RadioOption component
function RadioOption({ value, checked, onChange, children }) {
  return (
    <label>
      <input type="radio" value={value} checked={checked} onChange={onChange} />
      {children}
    </label>
  );
}

function App() {
  const [selected, setSelected] = useState("");

  return (
    <div className="App">
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  );
}

export default App;