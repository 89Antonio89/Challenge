import styles from "./Contacts.module.css";
import ModalFooter from "react-bootstrap/ModalFooter";

const Contacts = () => {
  return (
    <div id="Contacts" className={styles.main}>
      <div className={styles.container}>
        <h1>Contacts</h1>
        <p>Adress: Av. Teste 123</p>
        <p>Email: teste@gmail.com</p>
        <p>Phone Number: (123) 12345-6789</p>
      </div>
    </div>
  );
};

export default Contacts;
