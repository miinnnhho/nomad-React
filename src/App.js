import Button from "./Button";
import styles from "./App.module.css";
function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;

//컴포넌트를 다르게 만들고, 그 컴포넌트를 위한 css를 만들고, className을 기억할 필요 없음.
// 왜? => className={styles.title} 이런식으로 필요할 때 써주면 랜덤으로 만들어주니까!
