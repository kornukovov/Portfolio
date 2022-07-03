import About from "../about/about";
import MainInfo from "../main/MainInfo";
import styles from "./content.module.css"



export const Content = () => {
   return (
      <div className={styles.contentStyles}>

         <MainInfo/>
         <About/>

      </div>
   )
}