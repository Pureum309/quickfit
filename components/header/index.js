import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export default function Header(){
    return(
        <div className={styles.logoCont}>
            <Image src="/images/totallogo.png" alt="logo" width={300} height={60} />
        </div>
    )
}