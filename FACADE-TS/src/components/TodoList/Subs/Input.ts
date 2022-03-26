import Component from "./Component";

export interface IInputOption {
    wrapperEl: HTMLElement;
    placeholderText: string;
    buttonText: string;
}

class Input extends Component {

    private options: IInputOption;
    constructor(options: IInputOption) {
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

}

export default Input;