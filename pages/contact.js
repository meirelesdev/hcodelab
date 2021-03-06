import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../components/Contact.module.css'
import React, { useState } from 'react'
import axios from 'axios'


export default function Contact(){
    
    const [values, setValues ] = useState( {email: '', name:'', message:''} )

    const handleFormSubmit = e => {
        e.preventDefault()

        axios.post('http://localhost:3333/admin/contacts/add', values).then(
            (res)=>{
                alert(`Olá ${res.data.name}, Sua mensagem foi enviada com Sucesso!`)
                window.location.href=('/')
            }
        ).catch(err => {
            console.log('Deu ruim', err.message)
        })
    }

    const handleInputChange = e => {
        const { name, value }= e.target
        setValues({...values, [name]:value})
        console.log(name + ':', value)
    }

    return (
        <>
        <Header />
            <main id={styles.contact} className={styles.page}>
            <hr className="italy" />
                <div className={styles['page-header']}>
                    <header>
                        <h1><span className={styles['show-desktop']}>Fale Conosco</span><span className={styles['hide-desktop']}>Contato</span></h1>
                    </header>
                </div>                    
                <section>
                    <form className={styles.from} onSubmit={handleFormSubmit} >
                        <div className={styles.fields}>
                            <div className={styles.field}>
                                <input onChange={handleInputChange} onFocus={handleInputChange} type="text" name="name" id="name" />
                                <label htmlFor="name">Nome Completo</label>
                            </div>
                            <div className={styles.field}>
                                <input type="email" name="email" id="email" onChange={handleInputChange} onFocus={handleInputChange}  />
                                <label htmlFor="email">E-mail</label>
                            </div>
                        </div>
                        <div className={styles.field}>
                            <textarea name="message" id="message" onChange={handleInputChange} onFocus={handleInputChange} ></textarea>
                            <label htmlFor="message">Mensagem</label>
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                    <div id={styles.map}></div>
                </section>
                <hr className={styles.divider} />
                <ul className={styles.contacts}>
                    <li>
                        <img src="images/google-place.svg" alt="Icon" />
                        <h3>OUR HEADQUARTERS</h3>
                        <p>Modenheadera, Itália</p>
                    </li>
                    <li>
                        <img src="images/phone.svg" alt="Icon" />
                        <h3>SPEAK TO US</h3>
                        <p>(123) 456 7890</p>
                    </li>
                    <li>
                        <img src="images/skype.svg" alt="Icon" />
                        <h3>MAKE A VIDEO CALL</h3>
                        <p>FerrariOnSkype</p>
                    </li>
                    <li>
                        <img src="images/google-place.svg" alt="Icon" />
                        <h3>FOLLOW ON TWITTER</h3>
                        <p>2.3M Followers</p>
                    </li>
                </ul>
            </main>
            <Footer />
        </>
    )
}