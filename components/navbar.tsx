'use client';
import Link from 'next/link';
import { useState } from 'react';
import styles from '@/components/ui/navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const Handleopen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className={styles.navbar}>
            <div className={`${styles.navdiv} ${styles.container}`}>
                <div className={styles.logodiv}>
                    <Link href='/'>MyWebsite</Link>
                </div>
                <button
                    onClick={Handleopen}
                    aria-label='Toggle Navigation'
                    className={styles.hamburger}>
                    ☰
                </button>

                <div className={`${styles.linksdiv} ${isOpen ? styles.block : styles.hidden}`}>
                    <Link
                        href='/' className={`${styles.link} ${isOpen ? styles.active : ''}`}
                        onClick={Handleopen}>
                        Home
                    </Link>
                    <Link
                        href='/about' className={`${styles.link} ${isOpen ? styles.active : ''}`}
                        onClick={Handleopen}>
                        About
                    </Link>
                    <Link
                        href='/contact' className={`${styles.link} ${isOpen ? styles.active : ''}`}
                        onClick={Handleopen}>
                        Contact
                    </Link>
                    <Link
                        href='/services' className={`${styles.link} ${isOpen ? styles.active : ''}`}
                        onClick={Handleopen}>
                        Services
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;