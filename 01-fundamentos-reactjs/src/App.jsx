import { Header } from './componentes/Header';
import { Post } from './componentes/Post';
import { Sidebar } from './componentes/Sidebar';

import styles from './App.module.css';

import './Global.css';

export function App() {
  return (
    <div>

   <Header />

    <div className={styles.wrapper}>
      <Sidebar></Sidebar>
      <main>
      <Post 
      author="Jadson Borges"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, minima porro officiis consectetur, quia quod veritatis laudantium sequi autem dolores nostrum rem enim adipisci aliquid quisquam id numquam, sapiente magni."
      />
      
      <Post 
      author="Jadson Borges"
      content="aula 1"
      /> 
      </main>
    </div>
 
    </div>
   )

}

