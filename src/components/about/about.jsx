import React, { useState } from "react";
import MyProject from "./myProject/myProject";
import MySkills from "./mySkills/mySkills";
import MyStory from "./myStory/myStory";
import styles from "./about.module.css"


function About() {

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
      <div className={styles.wraperContainer}>
         <div className={styles.wraper}>
            <div className={styles.aboutHeader}>
               <div style={{ backgroundColor: color === "mySory" && "rgb(161, 150, 150)", fontWeight: color === "mySory" && "bold" }}
                  onClick={addMyStory}>
                  My story
               </div>
               <div style={{ backgroundColor: color === "mySkills" && "rgb(161, 150, 150)", fontWeight: color === "mySkills" && "bold" }}
                  onClick={addMySkills}>
                  My skills
               </div>
               <div style={{ backgroundColor: color === "myProject" && "rgb(161, 150, 150)", fontWeight: color === "myProject" && "bold" }}
                  onClick={addMyProject}>
                  My project
               </div>
            </div>
            <div className={styles.aboutContent}>
               {active}
            </div>
            
         </div>
      </div>

   )
}

export default About;