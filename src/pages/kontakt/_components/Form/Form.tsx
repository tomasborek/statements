//styles
import styles from "./Form.module.scss";
//components
import NormalButton from "../../../../components/NormalButton/NormalButton";
import { useForm, ValidationError } from "@formspree/react";

export default function Form() {
  const [state, handleSubmit] = useForm("xnqwovow");
  if (state.succeeded) {
    return (
      <div>
        <h4>Děkujeme za zaslání! Co nejdříve se vám ozveme!</h4>
      </div>
    );
  }
  return (
    <>
      {state.errors && (
        <div>
          <ValidationError errors={state.errors} />
          <ValidationError field="name" prefix="Name" errors={state.errors} />
          <ValidationError field="email" prefix="Email" errors={state.errors} />
          <ValidationError
            field="message"
            prefix="Message"
            errors={state.errors}
          />
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className={`${styles.contact_form} ${
          state.submitting ? styles.submitting : ""
        }`}
      >
        <div className={styles.inputs}>
          <div className={styles.item}>
            <p>Jméno*</p>
            <input type="text" placeholder="Jan Novák" name="name" required />
          </div>
          <div className={styles.item}>
            <p>E-mail*</p>
            <input
              type="email"
              placeholder="priklad@email.com"
              name="email"
              required
            />
          </div>
          <div className={styles.item}>
            <p>Telefon</p>
            <input type="phone" placeholder="+420" name="phone" />
          </div>
          <div className={styles.item}>
            <p>Firma</p>
            <input type="text" name="company" />
          </div>
          <div className={`${styles.item} ${styles.message}`}>
            <p>Vaše zpráva*</p>
            <textarea required name="message"></textarea>
          </div>
        </div>

        <NormalButton>Odeslat</NormalButton>
      </form>
    </>
  );
}
