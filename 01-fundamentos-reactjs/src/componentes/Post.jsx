import styles from './Post.module.css';

export function Post(){
return (
    <article className={styles.post}>
        <header>
            <div className= {styles.foto}>
                <img className={styles.foto} src="https://avatars.githubusercontent.com/u/113640748?v=4" />
                <div className={styles.authorinfo}>
                        <strong> Jadson Borges </strong>
                        <span> Desenvolvedor Web </span>


                </div>
            </div>

            <time title="29 de setembro ร s  15h" dataTime = "2022-09-29 15:05:12">Publicado hรก 1h</time>

        </header>

    <div className={styles.content}>
        
       <p> Fala galeraa ๐</p>

       <p> Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐</p>

       <p>๐ jane.design/doctorcare</p>

       <p> #novoprojeto #nlw #rocketseat</p>

    </div>

    </article>
)

}