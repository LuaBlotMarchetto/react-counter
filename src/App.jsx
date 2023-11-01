import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <body>
        <Header title="MY REACT COUNTER "></Header>
        <main>
          <Counter
            counter={counter}
            setCounter={setCounter}
            className="counter"
          ></Counter>
        </main>
        <Footer></Footer>
      </body>
    </>
  );
}

export default App;
