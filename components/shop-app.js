
class shopApp extends HTMLElement {
    constructor() {
        super(); 

        this.attachShadow({ mode: 'open'}); 
        this.render();
    }
    render() {
        this.shadowRoot.innerHTML = this.getTemplate();
    }
    getTemplate() {
        return `
            <div class="App">
                <div class="Shop-container">
                    
                </div>
            </div>
            ${this.getStyles()}
        `; 
    }
    getStyles() {
        return `
            <style>
                :host {
                    --primary-color: blue; 
                    --secundary-color: red; 
                    --heading-size: 18px;
                }
                :host([dark]) * {
                    color: #fff;
                    background: #2d2d2d;
                }
                h2 {
                    color: var(--primary-color);
                    font-size: var(--heading-size);
                }
                p {
                    color: var(--secundary-color);
                }

                p {
                    color: var(--my-app-color, red);
                    font-size: var(--my-app-font-size, 16px);
                }

                @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
                *{
                    box-sizing: border-box;
                }
                body{
                    margin: 0;
                    padding: 0;
                    font-family: 'lato', sans-serif;
                    min-height: 100%;
                }
                
            </style>
        `; 
    }
}

customElements.define('shop-app', shopApp);