import { ITodoList } from "../../typings";

class TodoList {

    private el: HTMLElement;
    private todoData: ITodoList[];

    constructor(el: HTMLElement, todoData: ITodoList[]) {
        this.el = el;
        this.todoData = todoData;

    }

    public init() {
        this.createComponents();
        this.render();
        this.bindEvent();
    }

    private createComponents() {
        console.log("createComponents");
    }

    private render() {
        console.log("render");
    }

    private bindEvent() {
        console.log("bindEvent");
    }

}

export default TodoList;