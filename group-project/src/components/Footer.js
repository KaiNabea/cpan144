import styles from "../app/page.module.css"

export default function Footer() {
    return (
      <footer style={{
        position: 'absolute',
        left: '0',
        right: '0',
        bottom: '0',
        width: '100%',
        textAlign: 'center',
        borderTop: '1px solid #ddd'
      }}>
        <p>© 2025 Doji's. All rights reserved.</p>
      </footer>
    );
  }
  