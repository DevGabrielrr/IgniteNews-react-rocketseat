import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
      {
            id: 1,
            author: {
                  avatarUrl: 'https://avatars.githubusercontent.com/u/95862666?s=400&u=5e277f843a782871a4f90aef63afdd955d8da7de&v=4',
                  name  : 'Gabriel Ribeiro',
                  role: 'Desenvolvedor Jr'
            },
            content: [
                  { type: 'paragraph', content: '👋 hello guys' },
                  { type: 'paragraph', content: 'Bem vindo(a) ao meu projeto do curso de React da rocketseat.' },
                  { type: 'Link', content: 'https://devgabrielrr.github.io/Portifolio-JavaScript-dio/' }
            ],
            publishedAt: new Date('2024-07-26 23:00:00')
      },
      {
            id: 2,
            author: {
                  avatarUrl: 'https://avatars.githubusercontent.com/u/44373172?v=4',
                  name: 'Fabio Augusto',
                  role: 'CTO @ Casa dos sites'
            },
            content: [
                  { type: 'paragraph', content: '👋 Olá' },
                  { type: 'paragraph', content: 'Bem vindo(a) ao meu projeto do curso de React da rocketseat.' },
                  { type: 'Link', content: 'http://www.fabioaugusto.dev' }                       
            ],
            publishedAt: new Date('2024-07-27 11:00:00')
      },
];

export function App() {
      return (
            <div>
                  <Header />
                  <div className={styles.wrapper}>
                        <Sidebar />
                        <main>
                              {posts.map(post => {
                                    return (
                                          // eslint-disable-next-line react/jsx-key
                                          <Post
                                                key={post.id}
                                                author={post.author}
                                                content={post.content}
                                                publishedAt={post.publishedAt}

                                          />
                                    )
                              })}
                        </main>
                  </div>
            </div>

      )

}

export default App
