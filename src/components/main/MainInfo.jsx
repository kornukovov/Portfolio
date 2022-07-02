import React from "react";
import styles from "./MainInfo.module.css";
import avatar from "../../assets/logo.jpg";
import reactLogo from "../../assets/react.svg";
import TimePassed from "../timer/timer";


function MainInfo() {
   return (

      <div className={styles.wraper}>

         <div className={styles.reactLogo}>
            <img src={reactLogo} alt="react-logo" />
            <div>
               <h1>Oleg Kornukov</h1>
               <h2>React developer</h2>
            </div>
         </div>

         <img className={styles.avatar} src={avatar} alt="avatar" />

         <TimePassed />

      </div>

   )
}

export default MainInfo;