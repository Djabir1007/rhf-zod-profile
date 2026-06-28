import { useForm } from "react-hook-form";
import styles from "./ProfileForm.module.css";
import {
  profileFormSchema,
  type ProfileFormValues,
} from "../../model/profileFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
  });

  const onSubmit = (data: ProfileFormValues) => {
    console.log(data);
  };

  return (
    <section className={styles.profileForm}>
      <h2 className={styles.title}>Данные пользователя</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="firstName">
            Имя
          </label>
          <input
            className={styles.input}
            id="firstName"
            type="text"
            {...register("firstName")}
          />
          {errors.firstName?.message && (
            <span className={styles.error}>{errors.firstName.message}</span>
          )}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="lastName">
            Фамилия
          </label>
          <input
            className={styles.input}
            id="lastName"
            type="text"
            {...register("lastName")}
          />
          {errors.lastName?.message && (
            <span className={styles.error}>{errors.lastName.message}</span>
          )}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
            id="email"
            type="email"
            {...register("email")}
          />
          {errors.email?.message && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="phone">
            Телефон
          </label>
          <input
            className={styles.input}
            id="phone"
            type="tel"
            {...register("phone")}
          />
          {errors.phone?.message && (
            <span className={styles.error}>{errors.phone.message}</span>
          )}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="birthDate">
            Дата рождения
          </label>
          <input
            className={styles.input}
            id="birthDate"
            type="date"
            {...register("birthDate")}
          />
          {errors.birthDate?.message && (
            <span className={styles.error}>{errors.birthDate.message}</span>
          )}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="city">
            Город
          </label>
          <input
            className={styles.input}
            id="city"
            type="text"
            {...register("city")}
          />
          {errors.city?.message && (
            <span className={styles.error}>{errors.city.message}</span>
          )}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="street">
            Улица
          </label>
          <input
            className={styles.input}
            id="street"
            type="text"
            {...register("street")}
          />
          {errors.street?.message && (
            <span className={styles.error}>{errors.street.message}</span>
          )}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="house">
            Дом
          </label>
          <input
            className={styles.input}
            id="house"
            type="text"
            {...register("house")}
          />
          {errors.house?.message && (
            <span className={styles.error}>{errors.house.message}</span>
          )}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="apartment">
            Квартира
          </label>
          <input
            className={styles.input}
            id="apartment"
            type="text"
            {...register("apartment")}
          />
          {errors.apartment?.message && (
            <span className={styles.error}>{errors.apartment.message}</span>
          )}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="inn">
            ИНН
          </label>
          <input
            className={styles.input}
            id="inn"
            type="text"
            {...register("inn")}
          />
          {errors.inn?.message && (
            <span className={styles.error}>{errors.inn.message}</span>
          )}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="about">
            О себе
          </label>
          <textarea
            className={styles.textarea}
            id="about"
            {...register("about")}
          />
          {errors.about?.message && (
            <span className={styles.error}>{errors.about.message}</span>
          )}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="contactMethod">
            Способ связи
          </label>
          <select
            className={styles.select}
            id="contactMethod"
            defaultValue=""
            {...register("contactMethod")}
          >
            <option value="" disabled>
              Выберите способ связи
            </option>
            <option value="email">Email</option>
            <option value="phone">Телефон</option>
            <option value="telegram">Telegram</option>
          </select>
          {errors.contactMethod?.message && (
            <span className={styles.error}>{errors.contactMethod.message}</span>
          )}
        </div>
        <div className={styles.checkboxField}>
          <input
            className={styles.checkbox}
            id="agreement"
            type="checkbox"
            {...register("agreement")}
          />
          <label className={styles.label} htmlFor="agreement">
            Я согласен на обработку персональных данных
          </label>
          {errors.agreement?.message && (
            <span className={styles.errorAgreement}>
              {errors.agreement.message}
            </span>
          )}
        </div>

        <button className={styles.button} type="submit">
          Отправить
        </button>
      </form>
    </section>
  );
};
