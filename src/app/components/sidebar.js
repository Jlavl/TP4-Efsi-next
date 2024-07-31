import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';


const Sidebar = () => { 
return (
<div className={styles.sidebar}>
    <h2>Navegación</h2>
    <ul>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/quienes-somos">Quienes somos</Link></li>
    <li><Link href="/reservas">Reservas</Link></li>
    <li><Link href="/contacto ">Contactanos!</Link></li>
    </ul>
</div>
);
};

export default Sidebar;