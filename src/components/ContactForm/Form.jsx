import Btn from "../Btn/Btn";
import styles from "./Form.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Form = () => {
  return (
    <section className={styles.container}>
      <div className={styles.con_form}>
        <div className={styles.top_btn}>
          <Btn text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
          <Btn text="VIA CALL" icon={<FaPhone fontSize="24px" />} />
        </div>

        <Btn
          isOutline={true}
          text="VIA EMAIL FROM"
          icon={<HiMail fontSize="24px" />}
        />

        <form>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="Text">Text</label>
            <textarea name="Text" rows="8" />
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <Btn text="SUBMIT BUTTON" />
          </div>
        </form>
      </div>
      <div className={styles.con_img}>
        <img src="/img/contact.svg" alt="img" />
      </div>
    </section>
  );
};

export default Form;
