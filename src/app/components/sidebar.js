import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';


const Sidebar = () => { 
return (
<div className={styles.sidebar}>
    <h2>Navegación</h2>
    <ul>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/quienes-somos">About</Link></li>
    <li><Link href="/reservas">Services</Link></li>
    <li><Link href="/contacto ">Contact</Link></li>
    </ul>
</div>
);
};

export default Sidebar;