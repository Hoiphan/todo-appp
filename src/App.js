import TodoList from "./Components/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useCallback, useEffect, useState } from "react";
import { v4 } from "uuid";

const TODO_APP_STORAGE_KEY = "MY-APP";

function App() {
  // state, prop

  const [todoList, SettodoList] = useState([]); //aray
  const [textinput, Settextinput] = useState("");

  useEffect(() => {
    const storagetodo = localStorage.getItem(TODO_APP_STORAGE_KEY);
    if (storagetodo) {
      SettodoList(JSON.parse(storagetodo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const onTextChange = useCallback((e) => {
    Settextinput(e.target.value);
  }, []);

  const onAddBtnClick = useCallback(
    (e) => {
      SettodoList([
        { id: v4(), name: textinput, isComplete: false },
        ...todoList,
      ]);

      Settextinput("");
    },
    [textinput, todoList]
  );

  return (
    <>
      <h3>Danh sach viec lam</h3>
      <Textfield
        name="add-todo"
        placeholder="Them viec can lam..."
        elemAfterInput={
          <Button
            isDisabled={!textinput}
            appearance="primary"
            onClick={onAddBtnClick}
          >
            Them
          </Button>
        }
        css={{ padding: "2px 4px 2px" }}
        value={textinput}
        onChange={onTextChange}
      ></Textfield>
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
