const tabContent = document.querySelectorAll('.tab_content_block')
const tabsParent = document.querySelector('.tab_content_items')
const  tabs = document.querySelectorAll('.tab_content_item')


const hideTabContent = () =>{
    tabContent.forEach((element) =>{
        element.style.display = 'none'
    })
    tabs.forEach((element) => {
        element.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tabContent[index].style.display = 'block';
    tabs[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()


tabsParent.onclick = (event) => {
    const targetElement = event.target;
    if (targetElement.classList.contains('tab_content_item')) {
        tabs.forEach((tab, tabIndex) => {
            if (targetElement === tab) {
                hideTabContent()
                showTabContent(tabIndex)
            }
        })
    }
}
let num = 0


const autoTabSlider = (i = 0) => {
    setInterval(() =>{
        i++
        if (i > tabContent.length -1){
            i = 0
        }
        hideTabContent()
        showTabContent(i)

    }, 3000)
}

autoTabSlider(num)


const phoneInput = document.querySelector('#phone_input')
const phoneCheck = document.querySelector('.btn')
const phoneResult = document.querySelector('.checker')

const regExp = /\+996 \d{3} \d{2}-\d{2}-\d{2}/

phoneCheck.addEventListener('click', () => {
    if (regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
})


