import { NotePencil, PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css';

export function Sidebar () {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src = "https://images.unsplash.com/photo-1624696941338-934bf86c28b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

            <div className={styles.profile}>
                <img className={styles.foto} src="https://avatars.githubusercontent.com/u/113640748?v=4" />
                <strong>Jadson Borges</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">    
                Edite seu perfil
                <NotePencil size={20}/>
                </a>
            </footer>
        </aside>
    );
}