// pages/experience.tsx
import styles from "./../education/Education.module.css";
import style from "./../accueil/Accueil.module.css";
const Experience: React.FC = () => {
    return (
        <div>
            <main>
                <div className={styles.container_presentation_bloc4}>
                    <div className={styles.presentation_bloc4}>
                        <h2 className={styles.element_education}>Stage de 3ème</h2>
                        <p><span className={style.bold}>Crédit du nord Lille</span></p>
                  +      <p>Durée : <span className={style.bold}>1 semaine</span></p>
                    </div>
                    <div className={styles.presentation_bloc4}>
                        <h2 className={styles.element_education}>Stage de 2nd</h2>
                        <p><span className={style.bold}>MANPOWER Lille</span></p>
                        <p>Durée :<span className={style.bold}> 2 semaines</span></p>
                    </div>
                    <div className={styles.presentation_bloc4}>
                        <h2 className={styles.element_education}>Stage de BUT2</h2>
                        <p><span className={style.bold}>Nativ création</span></p>
                        <p>Fonction : <span className={style.bold}>Développeur full stack Prestashop</span></p>
                        <p>Durée : <span className={style.bold}>8 semaines</span></p>
                    </div>
                    <div className={styles.presentation_bloc4}>
                        <h2 className={styles.element_education}>Alternance (en cours)</h2>
                        <p><span className={style.bold}>MDWEB</span></p>
                        <p>Fonction : <span className={style.bold}>Développeur full stack Prestashop</span></p>
                        <p>Prends fin le : <span className={style.bold}>27 juillet 2024</span></p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Experience;
