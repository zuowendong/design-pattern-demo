import TodoList from "./components/TodoList";
import { ITodoList } from "./typings";

;((doc) => {
    const oApp: HTMLElement = doc.querySelector("#app");

    const appData: ITodoList[] = [
        {id: 1, content: "111", completed: true},
        {id: 2, content: "222", completed: false},
        {id: 3, content: "333", completed: true},
    ];
    const init = (): void => {
        const todoList: TodoList = new TodoList(oApp, appData);
        todoList.init();
    }
    init();
})(document);