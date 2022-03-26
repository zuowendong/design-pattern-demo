import { ITodoData } from "../../../typings";

abstract class Component {
    protected static inputView(placeholderText: string, buttonText: string): string {
        return `
            <div>
                <input type="text" class="todoInput" placeholder="${placeholderText}" />
                <button class="addButton">${buttonText}</button>
            </div>
        `;
    }

    protected static listView(data: ITodoData[]): string {
        return `
            <div class="todoList">
                ${
                    data.length ?
                    data.map((todo: ITodoData) => {
                        return Component.todoView(todo);
                    })
                    :
                    ''
                }
            </div>
        `.split(",").join("");
    }

    protected static todoView(todo: ITodoData): string {
        const {id, content, completed} = todo;
        return `
            <div class="todoItem">
                <input type="checkbox" data-id="${id}" ${completed ? 'checked' : ''}>
                <span style="text-decoration: ${completed ? 'line-through': ''}">${content}</span>
                <button data-id="${id}">删除</button>
            </div>
        `;
    }
}

export default Component;