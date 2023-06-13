import styles from '../../styles/mainStyle.module.css'

// Cria os elementos básicos da página de busca
export default function Search() {
    return (        
        <div id={styles.home}>
            <h1 id={styles.title}>BUSCA RAMAL</h1>
            <h3 id={styles.subtitle}>O seu buscador de ramais oficial.</h3>
            <input id={styles.search} type="text" autoComplete="off" placeholder='Buscar...'/>
            <button id={styles.filtros}>Filtros</button>
            <ul id={styles.listContainer}></ul>
        </div>                 
    )
}