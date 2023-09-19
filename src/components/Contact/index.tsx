import styles from "./styles.module.css";
import Socials from "../Socials";

export default function Contact() {
  return (
    <footer className={`container ${styles.contact}`}>
      <div>
        <h4>Contact me on my socials:</h4>
        <p>Let's set up a coffee chat!</p>
      </div>
      <div className={styles.socials}>{Socials}</div>
    </footer>
  );
}
