import { Suspense } from "react"
import ChartComponent from "./Chart/Chart"
import styles from "./Main.module.scss"

function Main() {
    return (
        <div className={styles.container} >
            <Suspense fallback={<p>Loading javascript...</p>}>
                <ChartComponent />
            </Suspense>
        </div >
    )
}

export default Main