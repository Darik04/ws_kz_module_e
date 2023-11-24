
const styles = `
span{
    color: orange;
}


.wrapper{
    top: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    transition: 1s all;
}
.modal{
    padding: 30px;
    border-radius: 20px;
    background-color: #fff;
}
.modal h2{
    margin-bottom: 16px;
}
.btn{
    padding: 6px 0;
    width: 80px;
    border-radius: 10px;
    border: 1px solid #CACACA;
    text-align: center;
    background-color: #f1f1f1;
    margin-top: 30px;
    cursor: pointer;
}
.btn-wrapper{
    display: flex;
    justify-content: end;
}
.close{
    display: none;
}
`;

class ConfirmationModal extends HTMLElement{
    constructor(){
        super()
        const root = this.attachShadow({ mode: 'open' })
        
        const modalRoot = document.querySelector("confirmation-modal");

        const wrapper = document.createElement('div')
        const btnWrapper = document.createElement('div')
        const btn = document.createElement('div')
        const modal = document.createElement('div')
        const style = document.createElement('style')

        wrapper.classList.add('wrapper')
        modal.classList.add('modal')
        btnWrapper.classList.add('btn-wrapper')
        btn.classList.add('btn')
        // wrapper.innerHTML = `
        // <div class="modal">
        //     ${modal.innerHTML}
        //     <div class="btn-wrapper">
        //         <div class="btn">${this.getLabel}</div>
        //     </div>
        // </div>
        // `
        btn.innerHTML = this.getLabel
        btnWrapper.appendChild(btn)
        modal.innerHTML = modalRoot.innerHTML
        modal.appendChild(btnWrapper)
        wrapper.appendChild(modal)

        modalRoot.innerHTML = ''

        style.textContent = styles
        root.appendChild(wrapper)
        root.appendChild(style)

        btn.addEventListener('click', () => {
            wrapper.classList.add('close')
            this.dispatchEvent(new CustomEvent('confirm'))
        })
    }


    get getLabel(){
        return this.getAttribute('label') ?? 'OK'
    }
}

customElements.define('confirmation-modal', ConfirmationModal)