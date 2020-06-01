import styles from './Header.module.css'
import LinkItem from './LinkItem'
import Link from 'next/link'
import React from 'react'

export default function Nav(props) {

    const LinkMenu = itens => (
        <li>
            <Link href={itens.link}>
                <a alt={itens.label}>{itens.label}</a>
            </Link>
        </li>
    )

    return (

        <nav className={` ${ styles.menu }  ${ styles[props.isOpen] }` }>
            <div>                        
                <ul>
                    {LinkItem.map(item => (
                        <LinkMenu key={item.id} link={item.link} label={item.label} />
                    ))
                }
                </ul>
            </div>
            <Link href="/register">
                <a alt="Registrar-se" className={ styles['btn-register']}>Registre-se</a>
            </Link>
            <Link href="/login">
                <a alt="/login" className={ styles['btn-login']}>Login</a>
            </Link>
        </nav>
    )
}