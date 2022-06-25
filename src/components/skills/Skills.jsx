import React, { useState } from "react";
import MyProject from "../about/myProject/myProject";
import MySkills from "../about/mySkills/mySkills";
import MyStory from "../about/myStory/myStory";
import styles from "./Skills.module.css"

function Skills() {

   const [active, setActive] = useState((MyStory));
   const [color, setColor] = useState("mySory");

   const addMyStory = () => {
      setActive(MyStory);
      setColor("mySory");
   }

   const addMySkills = () => {
      setActive(MySkills);
      setColor("mySkills");
   }

   const addMyProject = () => {
      setActive(MyProject);
      setColor("myProject");
   }


   return (
      <div className={styles.wraper}>
         <div className={styles.aboutHeader}>
            <div style={{backgroundColor: color === "mySory" && "yellow", fontWeight: color === "mySory" && "bold" }}
            onClick={addMyStory}>
               myStory
            </div>
            <div style={{backgroundColor: color === "mySkills" && "yellow", fontWeight: color === "mySkills" && "bold" }}
            onClick={addMySkills}>
               mySkills
            </div>
            <div style={{backgroundColor: color === "myProject" && "yellow", fontWeight: color === "myProject" && "bold" }}
            onClick={addMyProject}>
               myProject
            </div>
         </div>
         <div className={styles.aboutContent}>
            {active}
         </div>
      </div>

   )
}

export default Skills;