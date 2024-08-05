import Image from "next/image";
import styles from "./page.module.css";
import layout from "./layout.js"

const Home = () => {
  return ( 
    <main className={styles.main}>
      <text classname={styles.description}>Esta es la Home.</text>
    </main>
  );
}

export default Home;
