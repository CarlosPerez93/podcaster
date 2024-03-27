import styles from "./App.module.css";
import { CustomHeader } from "./components/CustomHeader/CustomHeader";

function App() {
  return (
    <div className={styles.app}>
      <CustomHeader />
    </div>
  );
}

export default App;
