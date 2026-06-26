import { ProfileForm } from "@/features/profile-form/ui/ProfileForm/ProfileForm";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Форма профиля</h1>
      <main>
        <ProfileForm />
      </main>
    </div>
  );
}

export default App;
