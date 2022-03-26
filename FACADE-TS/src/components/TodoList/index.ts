import { ITodoList } from "../../typings";
import Input, { IInputOption } from "./Subs/Input";
import List from "./Subs/List";

class TodoList {

    private el: HTMLElement;
    private todoData: ITodoList[];
    private input: Input;
    private list: List;
    private todoWrapper: HTMLElement;

    constructor(el: HTMLElement, todoData: ITodoList[]) {
        this.el = el;
        this.todoData = todoData;
        this.todoWrapper = document.createElement("div");

    }

    public init() {
        this.createComponents();
        this.render();
        this.bindEvent();
    }

    private createComponents() {
        this.input = new Input(<IInputOption>{
            wrapperEl: this.todoWrapper,
            placeholderText: "请输入",
            buttonText: "增加",
        });
        this.list = new List();
    }

    private render() {
        this.input.render();
        this.el.appendChild(this.todoWrapper);
    }

    private bindEvent() {
        console.log("bindEvent");
    }

}

export default TodoList;