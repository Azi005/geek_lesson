const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseBtn = document.querySelector('.modal_close')

const openModal = () =>{
    modal.style.display = 'block'
}
const closeModal = () =>{
    modal.style.display = 'none'
}
modalTrigger.onclick = () => openModal() //lambda function
modalCloseBtn.onclick = () => closeModal()
modal.onclick = (event) =>{
    event.target === modal ? closeModal() : false
}

setTimeout(() =>{
    openModal()
},10000)

window.addEventListener('scroll', function() {
    let documentHeight = document.documentElement.scrollHeight;
    let windowHeight = window.innerHeight;
    if (window.pageYOffset >= documentHeight-windowHeight) {
        openModal();

    }
});


