import React from 'react'
import styles from "./ContactHeader.module.css";
const ContactHeader = () => {
  return (
    <div className={`container ${styles.contact_section}`}>
      <h1>CONTACT US</h1>
      <p>Let's connect through this wonderful plateform . Anyone can contact with me by submiting this form . I would love to explore myself and help people.
      So come and let's talk on any specific topic or anything that is more neccessary to increase and improve ourself. </p>
    </div>
  )
}

export default ContactHeader
