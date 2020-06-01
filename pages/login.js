import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../components/Login.module.css'
import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { Cookies } from 'react-cookie'

export default function Login() {

    const [values, setValues ] = useState({email: '', password:''})

    const cookies = new Cookies()

    let [token, setToken ]= useState(cookies.get('token') || null)

    const handleInputChange = e => {
        const { name, value }= e.target
        setValues({...values, [name]:value})

    }

    const handleFormSubmit = e => {
        e.preventDefault()
        axios.post('https://hcodelab-adonis.herokuapp/auths', values)
        .then(
            (res)=>{
                const tokenData = res.data.token
                cookies.set('token', tokenData)
                console.log('Usúario Autenticado!')
                window.location.href=("/admin")

            }
        ).catch(err => {
            console.log('Deu ruim', err.message)
        })
    }

    return (
        <>
        <Header />
            <main id={styles.login} className={styles.page}>
                <div className={styles['page-header']}>
                    <header>
                        <h1>Login</h1>
                    </header>
                    <hr className="italy" />
                </div>
                <section>
                    <div className={styles.image}></div>
                    <form className="from" onSubmit={handleFormSubmit}>
                        <div>
                            <div className="fields">
                                <div className="field">
                                    <input onChange={handleInputChange} onFocus={handleInputChange} type="email" name="email" id="email" />
                                    <label htmlFor="email">E-mail</label>
                                </div>
                                <div className="field">
                                    <input onChange={handleInputChange} onFocus={handleInputChange} type="password" name="password" id="password" />
                                    <label htmlFor="password">Senha</label>
                                </div>
                            </div>
                            <div className="actions">
                                <button  type="submit">Entrar</button>
                                <Link href="#">
                                    <a alt="Esqueci a senha">Esqueci a senha</a>
                                </Link>
                            </div>
                        </div>
                        <p>Você ainda não tem conta, 
                            <Link href="/register">
                                <a title="Cadastre-se">clique aqui</a>
                            </Link>
                             e cadastre-se.</p>
                    </form>
                </section>
            </main>    
        <Footer/>
        </>
    )
}