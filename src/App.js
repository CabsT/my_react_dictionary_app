import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./Dictionary";


import "./App.css";


function App(){
  return (
    <div className="container rounded">
      <div className="App">
        <h1 className="text-center">Dictionary</h1>
        <main>
          <Dictionary />
        </main>
      </div>
    </div>
  );
}

export default App;
