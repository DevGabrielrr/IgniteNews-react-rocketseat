import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src="https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/95862666?s=400&u=5e277f843a782871a4f90aef63afdd955d8da7de&v=4"/>
                <strong>Gabriel Ribeiro</strong>
                <span>Desenvolvedor Jr.</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu Perfil</a>
            </footer>
        </aside>
    );
}