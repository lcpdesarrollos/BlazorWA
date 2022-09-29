
// <template id="sellBtn">
//   <style>
//     :host {
//       --orange: #e67e22;
//       --space: 1.5em;
//     }
//     .btn-container {
//       border: 2px dashed var(--orange);
//       padding: var(--space);
//       text-align: center;
//     }
//     .btn {
//       background-color: var(--orange);
//       border: 0;
//       border-radius: 5px;
//       color: white;
//       padding: var(--space);
//       text-transform: uppercase;
//     }
//   </style>

//   <div class="btn-container">
//     <button class="btn">Comprar Ahora</button>
//   </div>
// </template>

class SellButton extends HTMLElement {
  constructor() {
    super();
    //this.importDocument = document.currentScript.ownerDocument;

    this.attachShadow({ mode: "open" });
    // const t = document.getElementById("#sellBtn");
    // const instance = t.content.cloneNode(true);
    this.shadowRoot.innerHTML = `
        <style>
      :host {
        --orange: #e67e22;
        --space: 1.5em;
      }
      .btn-container {
        border: 2px dashed var(--orange);
        padding: var(--space);
        text-align: center;
      }
      .btn {
        background-color: var(--orange);
        border: 0;
        border-radius: 5px;
        color: white;
        padding: var(--space);
        text-transform: uppercase;
      }
    </style>

    <div class="btn-container">
      <button class="btn">Comprar Ahora</button>
    </div>
        `;
  }
}

window.customElements.define("sell-button", SellButton);
