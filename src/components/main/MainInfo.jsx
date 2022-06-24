import React from "react";
import styles from "./MainInfo.module.css";


function MainInfo() {
   return (
      <div className={styles.wraper}>
         <div>profession</div>
         <div>fullName</div>
         <div>age</div>
         <div>avatar</div>
      </div>

   )
}

export default MainInfo;