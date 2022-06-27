import { useEffect, useState } from "react";
import { TimeCounter } from "./timerCount";
import styles from "./timer.module.css";


function TimePassed() {

   const [expTime, setExpTime] = useState()
   const interval = setInterval(() => setExpTime(TimeCounter), 1000)

   useEffect(() => () => clearInterval(interval), [interval])


   return (
      <div className={styles.timeContainer}>
         <div>
         React development experience
         </div>
         <div>{expTime}</div>
      </div>
   )

}


export default TimePassed;