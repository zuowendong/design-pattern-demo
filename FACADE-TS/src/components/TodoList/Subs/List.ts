import { ITodoData } from "../../../typings";
import Component from "./Component";

export interface IListOptions {
    wrapperEl: HTMLElement;
    todoData: ITodoData[];
}
class List extends Component{

    private wrapperEl: HTMLElement;
    private static todoData: ITodoData[];

    constructor(options: IListOptions) {
        super();
        this.wrapperEl = options.wrapperEl;
        List.todoData = options.todoData;
    }

    public render() {
        this.wrapperEl.innerHTML += Component.listView(List.todoData);
    }
}
export default List;