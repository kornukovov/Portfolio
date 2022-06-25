import React, { useState } from "react";
import MyProject from "../about/myProject/myProject";
import MySkills from "../about/mySkills/mySkills";
import MyStory from "../about/myStory/myStory";
import styles from "./Skills.module.css"

function Skills() {

   const [active, setActive] = useState((MyStory));

   const addMyStory = () => {
      setActive(MyStory)
   }

   const addMySkills = () => {
      setActive(MySkills)
   }

   const addMyProject = () => {
      setActive(MyProject)
   }


   return (
      <div className={styles.wraper}>
         <div className={styles.aboutHeader}>
            <div onClick={addMyStory}>
               myStory
            </div>
            <div onClick={addMySkills}>
               mySkills
            </div>
            <div onClick={addMyProject}>
               myProject
            </div>
         </div>
         <div>
            {active}
         </div>
      </div>

   )
}

export default Skills;