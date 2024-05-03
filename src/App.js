// import styles from "./App.module.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <section>
        <h1>오늘의 할일</h1>
        <TodoList />
      </section>
    </div>
    // <div className={styles.container}>
    //   <section className={styles.todoContainer}>
    //     <h1 className={styles.title}>오늘의 할일</h1>
    //     <TodoList />
    //   </section>
    // </div>
  );
}

export default App;
