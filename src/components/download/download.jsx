import { saveAs } from "file-saver";
import resume from "../../assets/resume_ru.pdf";
import downloadSvg from "../../assets/download.svg";
import styles from "./download.module.css";

function Download() {

   function downloadResume() {
      saveAs(resume)
   }

   return (
      <div className={styles.downloadWrapper}>
         {/* <div>
            <p>Имя: Олег</p>
            <p>Фамилия: Корнюков</p>
            <p>Возраст: 29 лет</p>
            <p>Место жительства: г. Краснодар</p>
         </div> */}

         <div onClick={downloadResume}>
            Download portfolio
            <img src={downloadSvg} alt="download-logo" width="20px" />
         </div>
      </div>
   )
}

export default Download;