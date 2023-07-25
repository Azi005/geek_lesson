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

const scrollHandler = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
        openModal()
        window.removeEventListener('scroll', scrollHandler)
    }
}
window.addEventListener('scroll', scrollHandler)


const form = document.querySelector('form')

const  postData = (form) => {
     
}
postData(form)