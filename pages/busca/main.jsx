import styles from '../../styles/mainStyle.module.css'

// Cria os elementos básicos da página de busca
export default function Search() {
    return (
        <div id={styles.bg}>
            <div id={styles.home}>
                <h1 id={styles.title}>Busca Ramal</h1>
                <input id={styles.search} type="text" autoComplete="off" />
                <ul id={styles.listContainer}></ul>
            </div>
        </div>            
    )
}