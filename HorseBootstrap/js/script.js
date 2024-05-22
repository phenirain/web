window.addEventListener('DOMContentLoaded', function() {
    // div to which add clone
    const mainClone = this.document.querySelector("#mainClone"); 

    // div to which add or delete horses
    let horsesDiv = this.document.querySelector('#horses');

    // btns for clone
    const cloneBtns = this.document.querySelectorAll('.main-btn');

    // btn for delete
    const deleteBtn = this.document.querySelector('#delete');
    // btn for add 
    const addBtn = this.document.querySelector('#add');
    
    // horses for add
    const horsesForAdd = this.document.querySelectorAll('.horse-origin');

    // clones for add clone in mainClone
    const infoClones = this.document.querySelectorAll('.clone')

    let i = 0;

    deleteBtn.addEventListener('click', () => {
        if (horsesDiv.childElementCount > 0) {
            const elements = horsesDiv.querySelectorAll('.horse-origin');
            const lastChild = elements[elements.length - 1];
            horsesDiv.removeChild(lastChild)
        }
    })

    addBtn.addEventListener('click', () => {
        const clonedElement = horsesForAdd[i % 2].cloneNode(true);
        horsesDiv.appendChild(clonedElement);
        i++;
    })

    cloneBtns.forEach((btn, id) => {
        btn.addEventListener('click', () => {
            const clonedElement = infoClones[id].cloneNode(true);
            mainClone.appendChild(clonedElement);
        })
    })
});