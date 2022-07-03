import React from "react";
import SocialLinks from "./components/about/socialLinks/socialLinks";
import { Content } from "./components/content/content";
import styles from "./style.module.css";
import Download from "./components/download/download";

function App() {

  return (
    <div className="App">

      <header className={styles.header}>
        <div>Developer portfolio</div>
        <SocialLinks />
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <Content />
          <Download />
        </div>
      </main>

    </div>
  );
}


export default App;