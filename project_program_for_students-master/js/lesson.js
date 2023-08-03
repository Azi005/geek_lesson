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

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/
phoneInput.value = '+996'

phoneCheck.addEventListener('click', () => {
    if (regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
})

const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const convert = (element, target, target2, isTrue) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('GET', "../data/convert.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.onload = () => {
            const data = JSON.parse(request.response)
            if(isTrue) {
                target.value = (element.value / data.usd).toFixed(2)
                target2.value = (element.value / data.eur).toFixed(2)
            } else {
                target.value = (element.value * data.usd).toFixed(2)
                target2.value = (element.value * data.eur).toFixed(2)
            }
            element.value === '' && (target.value = '')
            element.value === '' && (target2.value = '')
        }
    }
}

convert(som, usd, eur, true)
convert(usd, som, eur, false)
convert(eur, usd, som, true)
convert(eur, usd, som, false)


const card = document.querySelector('.card')
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')
let count = 0
card.innerHTML = ``



btnNext.onclick = () => {
    count++
    if (count >= 201){
        count = 1
    }
    cardP()
}


btnPrev.onclick = () => {
    count--
    if (count <= 0){
        count = 200
    }
    cardP()
}


const cardP = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        const data = await response.json()
        card.innerHTML = `
                <p>${data.title}</p>
                <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
                <span>${data.id}</span>
    `
    } catch (e) {
        console.log(e, 'ERROR')
    }
}



let number = 1;

const cardP1 = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${number}`)
        const data = await response.json()
        console.log(data)
    } catch (e){
        console.log(e, 'ERROR')
    }

}

cardP1()

const cityNameInput = document.querySelector('.cityName')
const  city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'
const  apiKey = `e417df62e04d3b1b111abeab19cea714`

const citySearch = () => {
    cityNameInput.oninput = async (event) => {
        try {
            const response = await fetch(`${BASE_URL}?q=${event.target.value}&appid=${apiKey}`)
            const data = await response.json()
            city.innerHTML = data?.name || 'city have not found'
            temp.innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        } catch (e){
            console.log(e, 'ERROR')
        }
    }
}
citySearch()

// weather