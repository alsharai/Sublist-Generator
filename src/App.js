import { useState } from 'react';

import Form from './components/Form'
import SubLists from './components/SubLists'



function App() {

  const [inputValue, setInputValue] = useState("")


  return (
    <div className="App">
      <Form
        id={inputValue}
        val={inputValue}
        setVal={setInputValue}
      />
      <SubLists 
        id={inputValue}
        val={inputValue}
      />
    </div>
  );
}

export default App;
