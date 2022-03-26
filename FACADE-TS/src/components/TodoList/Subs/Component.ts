abstract class Component {
    protected static inputView(placeholderText: string, buttonText: string): string {
        return `
            <div>
                <input type="text" class="todInput" placeholder="${placeholderText}" />
                <button class="todButton">${buttonText}</button>
            </div>
        `;
    }
}

export default Component;