/* eslint-disable react/prop-types */

import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({contents, onDeleteComment}) {

    const [LikeCount, setLikeCount] = useState(0);

function handleDeleteComment(){
    onDeleteComment(contents)

}

function handleLikeComment(){
    setLikeCount((state) =>{
        return state + 1;
    });
}

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false}
                src="https://media.licdn.com/dms/image/C4D03AQGpMOqFCt_AfQ/profile-displayphoto-shrink_800_800/0/1613566377619?e=1727308800&v=beta&t=cZ1NKXyf6kn0tp7uSYdRJTz8zhOZ7KJz729DPmRYrvA" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Fabio Akita</strong>
                            <time title=''>Cerca de 1h atrás </time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentario">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{contents}</p>

                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{LikeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
export default Comment