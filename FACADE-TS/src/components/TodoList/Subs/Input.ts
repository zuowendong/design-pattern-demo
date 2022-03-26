import Component from "./Component";

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

}

export default Input;