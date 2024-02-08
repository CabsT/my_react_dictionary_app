import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./DictionaryForm";


import "./App.css";


function App(){
  return (
    <div className="container rounded">
        <div className="heading">
          <h1 className="text-center">Dictionary</h1>
        </div>
        <main>
          <Dictionary />
        </main>
    </div>
  );
}

export default App;
