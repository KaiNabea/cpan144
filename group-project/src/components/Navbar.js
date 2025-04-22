import Link from "next/link"
import styles from "../app/page.module.css"

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', textAlign: 'right' }}>
      <Link className = {styles.nav} style={{ padding: '10px' }} href="/">Home</Link>
      <Link className = {styles.nav} style={{ padding: '10px' }} href="/Menu">Menu</Link>
      <Link className = {styles.nav} style={{ padding: '10px' }} href="/About">About</Link>
      <Link className = {styles.nav} style={{ padding: '10px' }} href="/Contact">Book Now</Link>
    </nav>
  );
}
