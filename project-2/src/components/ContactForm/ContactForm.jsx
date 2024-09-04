import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import { useState } from "react";
const ContactForm = () => {

   const[name, setName] = useState("")
   const[email, setEmail] = useState("")
   const[text, setText] = useState("")

   const onViaCallSubmit = () =>{
    console.log("i am from call")
   }

   const onSubmit =(event)=>{
    event.preventDefault();
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    console.log(event.target[2].value);


   }

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button 
          onClick={onViaCallSubmit}
          text="VIA CALL" 
          icon={<IoMdCall fontSize="24px" />} />
        </div>

        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />
        <form action="" onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea type="text" name="text" rows={8} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT" />
          </div>
        </form>
        <div className="outputs">
          {
          `${name} 
          ${email} 
          ${text}`
            }
        </div>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/Service 24_7-pana 1.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
