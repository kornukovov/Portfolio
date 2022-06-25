import React from "react";
import styles from "./MainInfo.module.css";
import avatar from "../../assets/logo.jpg";
import reactLogo from "../../assets/react.svg";


function MainInfo() {
   return (
      <div>

         <div className={styles.wraper}>

            <div>
               <img src={avatar} alt="avatar" />
            </div>

            <div className={styles.reactLogo}>
               <img src={reactLogo} alt="react-logo" />
               <div>
                  <h1>Олег Корнюков</h1>
                  <h2>React developer</h2>
               </div>
            </div>

            <div>age</div>
         </div>

      </div>

   )
}

export default MainInfo;