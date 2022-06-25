import React from "react";
import MainInfo from "./components/main/MainInfo";
import Skills from "./components/skills/Skills";
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
            <Skills />

          </div>
        </main>
    </div>
  );
}


export default App;