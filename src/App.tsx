import React, {useReducer, useState} from 'react';
import './App.css';

function App() {
  const [someState, setSomeState] = useState(0);
  const [someState2, setSomeState2] = useState(0);
  const [state, dispatch] = useReducer((prevState: Record<string, number>, action: any) => ({
    ...prevState,
    value: prevState.value + 1
  }), {value: 0});

  console.log('Render', someState, someState2, state);
  return (
    <div className="App">
      <button onClick={() => {
        console.log('clicked');
        setSomeState(someState + 1);
        setSomeState2(someState2 + 1);
        new Promise((r) => r(dispatch({})));
        new Promise((r) => setTimeout(() => r(dispatch({})), 100));
      }}>Click Me
      </button>
    </div>
  );
}

export default App;
