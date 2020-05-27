import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../components/Error.module.css'

export default function Custom404() {
    return (
        <>
        <Header />
        <main id={styles.error} className={styles.page}>
        
        <hr className="italy" />

        <div className={styles.columns}>
            <div className={styles.column}>
                <header>
                    <h1>
                        <span className='show-desktop'><b>Uno</b>&nbsp;problema ocorrido!</span>
                        <span className="hide-desktop">Problema ocorrido no <b>Mobi</b>le!</span>
                    </h1>
                </header>        
                <p>Tente novamente mais tarde.</p>
            </div>
            <div className={styles.column}>
                <picture>
                    <source srcset="images/uno.png" media="(min-width: 1200px)"  />
                    <source srcset="images/mobi@2x.png" media="(min-width: 480px)"  />
                    <img src="images/mobi.png" alt="Mobi" />
                </picture>
            </div>
        </div>

    </main>
    <Footer />
    </>
    )
}