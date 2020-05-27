import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../components/Register.module.css'

export default function Register() {
    return (
        <>
        <Header />
        <main id={styles.register} className={styles.page}>
            <div className={styles['page-header']}>
                <header>
                    <h1>Cadastro</h1>
                </header>
                <hr className="italy" />
            </div>
            <section>
                <div className={styles.image}></div>
                <form className="from">
                    <div>
                        <div className="fields">
                            <div className="field">
                                <input type="text" name="name" id="name" />
                                <label for="name">Nome Completo</label>
                            </div>
                            <div className="field">
                                <input type="email" name="email" id="email" />
                                <label for="email">E-mail</label>
                            </div>
                        </div>
                        <div className="fields">
                            <div className="field">
                                <input type="date" name="birth" id="birth" />
                                <label for="birth">Data de Nascimento</label>
                            </div>
                            <div className="field">
                                <input type="password" name="password" id="password" />
                                <label for="password">Senha</label>
                            </div>
                        </div>
                        <button type="submit">Entrar</button>
                    </div>
                    <p>Se você já possui uma conta, <a href="/login">clique aqui</a> para fazer o login.</p>
                </form>
            </section>
        </main>
        <Footer />
        </>
    )
}