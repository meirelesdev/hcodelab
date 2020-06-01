import styles from '../components/Footer.module.css'
import Link from 'next/link'

export default function Footer(){
    return(

        <footer id={ styles.footer}>
                <button type="button">
                    <img src="images/icon-arrow-up.svg" alt="up" />
                </button>
                <div className={styles.columns}>
                    <div>
                        <ul className={ styles.links}>
                            <li className={ styles.titles}>Links</li>
                            <li>
                                <Link href="/">
                                    <a href="/">Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/our-history">
                                    <a alt="">Nossa História</a>
                                </Link>
                            </li>
                            <li>
                            <Link href="/gallery">
                                <a alt="Ver nossa galeria">Galeria</a>
                            </Link>
                            </li>
                            <li>
                            <Link href="/contact">
                                <a alt="Entrar em contato">Contato</a>
                            </Link>
                            </li>
                        </ul>
                        <ul>
                            <li className={ styles.title }>Contato</li>
                            <li>E-mail: support@ferrari.it</li>
                            <li className={ styles.social }>
                                <a href="#"><img src="images/facebook.svg" alt="Facebook"/></a>
                                <a href="#"><img src="images/twitter.svg" alt="Twitter"/></a>
                                <a href="#"><img src="images/youtube.svg" alt="YouTube"/></a>
                                <a href="#"><img src="images/instagram.svg" alt="Instagram"/></a>
                            </li>
                        </ul>
                    </div>
                    <Link href="/">
                        <a alt="Ir para Home"><img src="images/ferrari-footer.svg" alt="Logo" className={ styles.logo} /></a>
                    </Link>
                </div>
                <p>2020 © Hcode. All rights reserved.</p>
            </footer>
    )
}