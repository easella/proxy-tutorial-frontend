import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [response, setResponse] = useState('')

  return (
    
    <div className="App">
    <iframe src="https://luckyvictoriousstack.awdrgyjil1234.repl.co/" style="border:0px #ffffff none;" name="myiFrame" scrolling="yes" frameborder="1" marginheight="0px" marginwidth="0px" height="1000px" width="1500px" allowfullscreen></iframe>
      <header className="App-header">
        <button
          onClick={() => {
            // Make a request call
            fetch('api/hello-world').then(res => {
              // Resolve text from response
              res.text().then(text => setResponse(text))
            })
          }}
        >
          Say hello!
        </button>

        {response}

      </header>
    </div>
  );
}

export default App;
