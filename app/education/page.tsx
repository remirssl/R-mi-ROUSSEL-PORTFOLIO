// pages/education.tsx

import styles from "./Education.module.css";
import style from "./../accueil/Accueil.module.css";
const Education: React.FC = () => {
    return (
        <div>
            <main>
                <div className={styles.container_presentation_bloc4}>
                    <div className={styles.presentation_bloc4}>
                        <h2 className={styles.element_education}>Brevet des collèges</h2>
                        <p>Collège <span className={style.bold}>Immaculé Conecption</span> à <span className={style.bold}>Seclin</span></p>
                        <p>Mention :<span className={style.bold}> Bien</span></p>
                    </div>
                    <div className={styles.presentation_bloc4}>
                        <h2 className={styles.element_education}>Bac général</h2>
                        <p>Lycée <span className={style.bold}>Sainte Marie</span> à <span className={style.bold}>Beaucamps-ligny</span></p>
                        <p>Mention :<span className={style.bold}> Assez Bien</span></p>
                    </div>
                    <div className={styles.presentation_bloc4}>
                        <h2 className={styles.element_education}>BUT (en cours)</h2>
                        <p><span className={style.bold}>IUT</span> de <span className={style.bold}>Lens</span></p>
                        <p>Spécialité :<span className={style.bold}> Développement d'application</span></p>
                    </div>
                    <div className={styles.presentation_bloc4}>
                        <h2 className={styles.element_education}>Après le but (envisagé)</h2>
                        <p><span className={style.bold}>Recherche d'emploi</span></p>
                        <p>Si possible dans mon entreprise d'alternance : <span className={style.bold}>MDWEB</span>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Education;
