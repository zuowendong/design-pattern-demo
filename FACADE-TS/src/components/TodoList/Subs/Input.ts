import Component from "./Component";
import List from "./List";

export interface IInputOptions {
    wrapperEl: HTMLElement;
    placeholderText: string;
    buttonText: string;
}

class Input extends Component {

    private options: IInputOptions;
    constructor(options: IInputOptions) {
        super();
        this.options = options;
    }

    public render() {
        const {placeholderText, buttonText} = this.options;
        this.options.wrapperEl.innerHTML += Component.inputView(
            placeholderText,
            buttonText
        )
    }

    public bindEvent() {
        const oAddBtn: HTMLElement = document.querySelector(".addButton");
        const oInput: HTMLElement = document.querySelector(".todoInput");
        oAddBtn.addEventListener("click", this.handleBtnClick.bind(this, oInput), false);
    }

    private handleBtnClick(inputDom) {
        const val: string = inputDom.value.trim();

        if (val.length) {
            List.addItem(val);
            inputDom.value = "";
        }
    }

}

export default Input;