/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import styles from './Post.module.css'
import Comment from './Comment'
import Avatar from './Avatar'
import { useState } from 'react'

export function Post({author, publishedAt, content}){

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix: true
    })

    // Validar o furmulário
    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    // Validar o furmulário

    // Criar comentários
    const [comments, setComments] = useState([
        'Post muito bacana, Hein?'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    function handleNewCommentChange(){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value)
    }

    function handleCreateNewComment(){
        event.preventDefault()
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }
    // Criar comentários

    // Deletar comentários
    function deleteComment(commentToDelete){
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeleteOne);
    }
    // Deletar comentários

    const isNewCommentEmpty = newCommentText.length === 0;
       
    return(
      <article className={styles.post}>
        <header>
            <div className={styles.author}> 
                <Avatar hasBorder={true} src={author.avatarUrl}/>
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

            <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
        </header>

        <div className={styles.content}>

            {
                content.map(line =>{
                    if (line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>;
                    }else if(line.type === 'link'){
                        return <p key={line.content}><a href='#'>{line.content}</a></p>;
                    }
                })
            }
            <p>
                <a href="">#NovoProjeto</a>{' '}
                <a href="">#React</a>{' '}
                <a href="">#Typescript</a>
            </p>
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea required onInvalid={handleNewCommentInvalid} onChange={handleNewCommentChange} value={newCommentText} placeholder='Deixe um comentário' />
            <footer>
                <button disabled={isNewCommentEmpty} type='submit'>Publicar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            {
                comments.map(comments =>{
                    return <Comment key={comments} contents={comments} onDeleteComment={deleteComment}/>
                })
            }
        </div>
      </article>
    );
}

export default Post