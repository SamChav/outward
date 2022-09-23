import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/Todo.module.css";
const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [contentEditable, setContentEditable] = useState(false);
  useEffect(() => {
    axios.get("/api/todo").then((res) => {
      setTodoList(res.data.tasks);
    });
  }, []);

  const postTask = (e) => {
    if (e.target.value.length > 100) {
        alert("Message Cannot be over 100 characters long")
        e.target.value = 'try again'
    }
    if (e.key === "Enter" && e.target.value.length <= 100) {
      axios
        .post("/api/todo", {
          task: `${e.target.value}`,
        })
        .then(() => {
          axios.get("/api/todo").then((res) => {
            setTodoList(res.data.tasks);
            e.target.value = ''
          });
        });
    }
  };

  async function deleteTask (event, e) {
    e.preventDefault();
    const id = event;
    await axios.delete(`/api/todo/${id}`).then(() => {
      axios.get("/api/todo").then((res) => {
        setTodoList(res.data.tasks);
      });
    });
  };

  //   const editText = (e, el) => {
  //     // console.log(el.id)
  //     // console.log(e)
  //     // console.log(e.target.innerText)
  //     const id = el.id;
  //     if (e.key === "Enter") {
  //       axios
  //         .patch(`/api/todo/${id}`, {
  //           task: `${e.target.innerText}`,
  //         })
  //         .then(() => {
  //           setTodoList([
  //             ...todoList.slice(0, id),
  //             e.target.innerText,
  //             ...todoList.slice(id, +1),
  //           ]);
  //           console.log(todoList);
  //         });
  //     }
  //   };

  return (
    <div className={styles.todoContainer}>
      <div className={styles.paragraph}>
        <span className={styles.text}>This is my To Do list, please feel free to try it out. Currently it's under construction along with the rest of the portfolio. It uses an SQL database connected through postgresJS and currently you can read, post, delete, with patch soon to come.</span> 
      </div>
      <input
        className={styles.inputField}
        placeholder="Type in a To Do (for example, `get milk`), then press enter. Limit 100 Characters."
        onKeyDown={postTask}
      ></input>
      <ul className={styles.ul}>
        {todoList.map((el) => (
          <li key={el.id} className={styles.bullets}>
            <input
              type="checkbox"
              id="todoCheckbox"
              className={styles.todoCheckbox}
            ></input>
            {el.task}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 30 25"
              strokeWidth={1.5}
              stroke="currentColor"
              className={styles.svg}
            >
              <path
                onClick={(e) => deleteTask(el.id, e)}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
