import { z } from "zod";

export const profileFormSchema = z.object({
  firstName: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  lastName: z.string().min(2, "Фамилия должна содержать минимум 2 символа"),
  email: z.email("Введите корректный email"),
  phone: z
    .string()
    .regex(
      /^(?:\+7|8)\s?\(?\d{3}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/,
      "Телефон должен быть в формате +79991234567, 89991234567 или +7 (999) 123-45-67",
    ),
  birthDate: z.iso.date("Укажите дату рождения"),
  city: z.string().min(2, "Город должен содержать минимум 2 символа"),
  street: z.string().min(2, "Улица должна содержать минимум 2 символа"),
  house: z.string().min(1, "Укажите дом"),
  apartment: z.string().min(1, "Укажите квартиру"),
  inn: z
    .string()
    .regex(/^\d{10}$|^\d{12}$/, "ИНН должен содержать 10 или 12 цифр"),
  about: z.string().min(10, "Описание должно содержать минимум 10 символов"),
  contactMethod: z.enum(["email", "phone", "telegram"], {
    error: "Выберите способ связи",
  }),
  agreement: z.literal(true, {
    error: "Необходимо согласиться на обработку данных",
  }),
});

export type ProfileFormValues = z.infer<typeof profileFormSchema>;
