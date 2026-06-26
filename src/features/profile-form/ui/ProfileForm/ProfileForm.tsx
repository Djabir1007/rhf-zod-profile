import styles from "./ProfileForm.module.css";

export const ProfileForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(Object.fromEntries(formData));
  };

  return (
    <section className={styles.profileForm}>
      <h2 className={styles.title}>Данные пользователя</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="firstName">
            Имя
          </label>
          <input
            className={styles.input}
            id="firstName"
            name="firstName"
            type="text"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="lastName">
            Фамилия
          </label>
          <input
            className={styles.input}
            id="lastName"
            name="lastName"
            type="text"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
            id="email"
            name="email"
            type="email"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="phone">
            Телефон
          </label>
          <input className={styles.input} id="phone" name="phone" type="tel" />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="birthDate">
            Дата рождения
          </label>
          <input
            className={styles.input}
            id="birthDate"
            name="birthDate"
            type="date"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="city">
            Город
          </label>
          <input className={styles.input} id="city" name="city" type="text" />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="street">
            Улица
          </label>
          <input
            className={styles.input}
            id="street"
            name="street"
            type="text"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="house">
            Дом
          </label>
          <input className={styles.input} id="house" name="house" type="text" />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="apartment">
            Квартира
          </label>
          <input
            className={styles.input}
            id="apartment"
            name="apartment"
            type="text"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="inn">
            ИНН
          </label>
          <input className={styles.input} id="inn" name="inn" type="text" />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="about">
            О себе
          </label>
          <textarea className={styles.textarea} id="about" name="about" />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="contactMethod">
            Способ связи
          </label>
          <select
            className={styles.select}
            id="contactMethod"
            name="contactMethod"
            defaultValue=""
          >
            <option value="" disabled>
              Выберите способ связи
            </option>
            <option value="email">Email</option>
            <option value="phone">Телефон</option>
            <option value="telegram">Telegram</option>
          </select>
        </div>
        <div className={styles.checkboxField}>
          <input
            className={styles.checkbox}
            id="agreement"
            name="agreement"
            type="checkbox"
          />
          <label className={styles.label} htmlFor="agreement">
            Я согласен на обработку персональных данных
          </label>
        </div>
        <button className={styles.button} type="submit">
          Отправить
        </button>
      </form>
    </section>
  );
};
