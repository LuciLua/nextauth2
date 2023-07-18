import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./Plans.module.scss"

function Plans() {
    return (
        <div className={styles.content_2}>

            <div className={styles.plans}>
                <div className={styles.plan}>
                    <h1>Basico</h1>
                    <p>description here description here description.</p>
                    <ul>
                        <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                        <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                        <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                    </ul>
                    <h2>R$1200<span>/dia</span></h2>
                    <button><Link href={`/plans/basico`}>Escolher</Link></button>
                </div>
                <div className={styles.plan}>
                    <h1>Padrão</h1>
                    <p>description here description here description.</p>
                    <ul>
                        <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                        <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                        <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                        <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                        <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                    </ul>
                    <h2>R$2250<span>/dia</span></h2>
                    <button><Link href={`/plans/padrao`}>Escolher</Link></button>

                </div>
                <div className={styles.plan}>
                    <h1>Master</h1>
                    <p>description here description here description.</p>
                    <ul>
                        <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                        <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                        <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                        <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                        <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                        <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                        <li><span><FaCheckCircle /></span><span> Item tal tal</span></li>
                    </ul>
                    <h2>R$3000<span>/dia</span></h2>
                    <button><Link href={`/plans/master`}>Escolher</Link></button>

                </div>

            </div>

        </div>
    )
}


export default Plans