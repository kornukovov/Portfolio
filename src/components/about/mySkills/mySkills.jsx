import styles from "./mySkills.module.css";
import business from "../../../assets/business.svg"
import oneUS from "../../../assets/one-user.svg"
import flex from "../../../assets/flex.svg"
import pazzle from "../../../assets/pazzle.svg"

function MySkills() {
   return (
      <div className={styles.mySkillsStyle}>
         <a><b>Навыки:</b></a>
         <a>
            <img src={business} alt="business" width="20px" />
            Понимание приоритета бизнесса в любой разработке;
         </a>
         <a>
            <img src={oneUS} alt="oneUs" width="20px" />
            Самостоятельно решаю любые поставленные задачи;
         </a>
         <a>
         <img src={flex} alt="flex" width="20px" />
            Отзывчивая и адаптивная верстка;
            </a>
         <a>
         <img src={pazzle} alt="pazzle" width="20px" />
            Понимание алгоритмов и умение их применять;
            </a>
         <br />
         <a><b>Инструменты разработки:</b></a>
         <a>Google 10 из 10;</a>
         <a>JavaScript</a>
         <a>CSS</a>
         <a>React</a>
         <a>Redux</a>
         <a>Git</a>
         <a>npm</a>


      </div>
   )
}

export default MySkills;