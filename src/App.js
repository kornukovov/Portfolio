import React from "react";
import About from "./components/about/about";
import MainInfo from "./components/main/MainInfo";
import styles from "./style.module.css";

function App() {

  return (
    <div className="App">

      <header className={styles.header}>
        <div>Developer portfolio</div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
         
          <MainInfo />
          <About />

        </div>
      </main>
    </div>
  );
}


export default App;