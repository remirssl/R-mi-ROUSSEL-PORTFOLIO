// pages/page.tsx

import Index from '../header';
import styles from "./Accueil.module.css";

const Accueil: React.FC = () => {
    return (
        <div>
            <div>
                <div className={styles.presentation_bloc}>
                    <h1>Bonjour,</h1>
                    <h2>Je m'appelle <span className={styles.name}>Rémi ROUSSEL</span></h2>
                </div>

                <div className={styles.presentation_bloc2}>
                    <div className={styles.presentation_bloc3}>
                        <h2>Présentation</h2>
                        <br></br> <br></br>
                        <div> Je suis actuellement en 3ème année de <span
                            className={styles.bold}>BUT informatique</span> à
                            l <span className={styles.bold}>iut de lens</span>.
                        </div>
                        <br></br> <br></br>
                        <div>J effectue cette troisième année en alternance au sein de l entreprise <span
                            className={styles.bold}>MDWEB</span>.
                        </div>
                        <br></br> <br></br>
                        <div>Je suis donc un developpeur <span className={styles.bold}>full stack</span> spécialisé
                            en <span
                                className={styles.bold}>Prestashop</span>.
                        </div>
                        <br></br> <br></br>
                        <div><span className={styles.bold}>Prestashop</span> étant un outil permettant de crée des
                            boutiques en ligne.
                        </div>
                    </div>

                    <div className={styles.presentation_bloc3}>
                        <h2>Hoobies</h2>

                        <div className={styles.presentation_bloc3_image_container}>
                            <img className={styles.presentation_img} src="/running.jpg" alt="running"/>
                            <img className={styles.presentation_img} src="/burger.jpg" alt="tennis"/>
                            <img className={styles.presentation_img} src="/famille.jpg" alt="gaming"/>
                            <img className={styles.presentation_img} src="/velo.jpg" alt="cinema"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accueil;
