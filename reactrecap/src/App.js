
import './App.css';

function App() {
  const title= 'Welcome to React';
  const likes = 50;
  // const person = {string: objects are not valid};
  const link ="https://www.google.com";
  
  return (
    <div className="App">
        <div className="className">
            <h1>{ title }</h1> {/*short: h*/}
            <p>{ 10 }</p> {/*short: p*3*/}
            <p>{ "hello, coding journey" }</p> {/*hardcodes are valid*/}
            <p>{ [1,2,3] }</p>
            <p>{ Math.random()*8 }</p> {/*functions are valid*/}
            <p>{ link }</p> 
            <p>Functional Component and Deconstructors for dynamic variables</p> 
        </div>
    </div>
  
  );
}

export default App;
