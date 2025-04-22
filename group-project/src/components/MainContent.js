import styles from "../app/page.module.css"

export default function MainContent({ title }) {
    return (
      <div>
        <h2 style={{textShadow: '2px 2px black', fontSize: '36px', padding: '10px' }}>{title}</h2>
      </div>
    );
  }
  