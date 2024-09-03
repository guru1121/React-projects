import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
const ContactForm = () => {
  console.log(styles);
  return (
    <section className={styles.container}>
      <div className="contact_form">
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage />} />
        <Button text="VIA CALL" icon={<MdMessage />} />
      </div>
      <div className="contact_image"></div>
    </section>
  );
};

export default ContactForm;
