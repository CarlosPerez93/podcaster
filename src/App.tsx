import { RouterProvider } from "react-router-dom";

import { router } from "./routes/Router";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
