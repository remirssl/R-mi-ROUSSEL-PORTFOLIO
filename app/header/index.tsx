// components/index.tsx

import Link from 'next/link';
import styles from './Header.module.css';

const Index: React.FC = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link  href="/accueil">
                            <div className={styles.link}>Accueil</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/experience">
                            <div className={styles.link}>Expérience</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/education">
                            <div className={styles.link}>Éducation</div>
                        </Link>
                    </li>
                    {/* Ajoutez d'autres liens selon vos besoins */}
                </ul>
            </nav>
        </header>
    );
};

export default Index;
