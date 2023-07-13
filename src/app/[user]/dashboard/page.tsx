import styles from "./dashboard.module.scss"

export default function dashboard({ params }) {
    return (
        <div className={styles.container}>
            <header className={styles.header_container}>
                <ul>
                    <li>item1</li>
                    <li>item2</li>
                    <li>item3</li>
                    <li>item4</li>
                </ul>
            </header>
            <div className={styles.table}>
                <div className={styles.table_header}>

                    <div className={styles.title_subtitle}>
                        <h1>Dashboard</h1>
                        <h2>Subtitle</h2>
                    </div>
                    <div>
                        <button>Create</button>
                    </div>
                </div>
            </div>
            <div>
                <header>area de inclusao</header>
                <div>
                    <div>item 1</div>
                    <div>item 2</div>
                    <div>item 3</div>
                    <div>item 4</div>
                </div>
            </div>
        </div>
    )
}