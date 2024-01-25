import Link from 'next/link'
import styles from './Logo.module.css'
import { Montserrat } from 'next/font/google'
const logoFont = Montserrat({
    subsets: ['latin'],
    weight: ['600']
})

function Logo() {
    return (
        <Link href={"/"} className={`${styles.logo} ${logoFont.className}}`} aria-label="Al Reem Island">Al Reem <span className='text-indigo-600'>Island</span></Link>
    )
}

export default Logo