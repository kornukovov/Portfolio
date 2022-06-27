import github from "../../../assets/github.svg";
import telegram from "../../../assets/telegram.svg";
import styles from './socialLinks.module.css';


function SocialLinks() {

   return (
      <div className={styles.socialLinks}>
         <a href="https://github.com/kornukovov" target="_blank" rel="noreferrer" >
            <img src={github} alt="github" />
         </a>

         <a href="#" target="_blank" rel="noreferrer">
            <img src={telegram} alt="telegram" />
         </a>
      </div>
   )
}


export default SocialLinks;