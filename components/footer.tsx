'use client';
import Link from 'next/link';
import styles from '@/components/ui/footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.container}`}>
                <div className={styles.logoSection}>
                    <h2>MyWebsite</h2>
                    <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
                </div>

                <div className={styles.linksSection}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/services">Services</Link></li>
                    </ul>
                </div>

                <div className={styles.socialSection}>
                    <h3>Follow Us</h3>
                    <div className={styles.socialIcons}>
                        <a href="#" aria-label="Facebook">📘</a>
                        <a href="#" aria-label="Twitter">🐦</a>
                        <a href="#" aria-label="Instagram">📸</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
