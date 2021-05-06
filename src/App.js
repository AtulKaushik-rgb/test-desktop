import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header/index";
import Headline from "./component/headline/index";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts"/>
      </section>
    </div>
  );
}

export default App;
