import React, { useState } from 'react'
import styles from "./ContactForm.module.css"
import Button from '../../Button/Button'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  const[name, setName]=useState("");
  const[email,setEmail]=useState("");
  const[text,setText]=useState("");
  const onSubmit=(e)=>{
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  }
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
      <div className={styles.top_btn}>
        <Button text="LET'S START CHAT" icon=<MdMessage fontSize="25px"/>/>
        <Button text="LET'S CONTACT" icon=<FaPhoneAlt fontSize="25px"/>/>
      </div>
      <Button isOutline={true} text="CONNECT THROUGH EMAIL" icon=<HiMail fontSize="25px" />/>
      <form onSubmit={onSubmit}>
      <div className={styles.form_control}>
      <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder='Write Your Name Here'/>
        </div>
        <div className={styles.form_control}>
        <label htmlFor="name">Email</label>
        <input type="email" name="email" placeholder='Write Your Email Here'/>
        </div>
        <div className={styles.form_control}>
        <label htmlFor="name">Text</label>
        <textarea name="text" rows="5" placeholder='Write Your Message Here'/>
        </div>
        <div style={{
          display:"flex",
          justifyContent:"center",
        }}
        >
          <Button text="Submit"/>
        </div>
        <div>
        {`Name : `+ name + " , " + "Email : "+ email + " , "+ "Text : "+ text}
        </div>
      </form>
      </div>
      <div className={styles.contact_img}>
       <img src="https://www.onsip.com/hubfs/Professional%20Outbound%20Caller%20ID%20Tips%20for%20Sales%20Featured%20Image%20%28iStock-946991350%29.jpg" width="850px" height="540px" alt="contactpic" />
      </div>
    </section>
  )
}
export default ContactForm
