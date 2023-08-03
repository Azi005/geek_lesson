let count = 1
const url = 'https://jsonplaceholder.typicode.com/posts'
const main = document.querySelector('.wrapper1')

const fetchData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    data.map(item => {
        const block = document.createElement('div')
        block.classList.add('img_wrapper')
        block.innerHTML = `
            <img width="300px" height="180px" src="../img/Hayabusa.(Mobile.Legends_.Bang.Bang!).full.3261861.jpg">
            <p class="text1" style="font-size: 25px; color: red; margin: 20px 0 10px 0">${item.title}</p>
            <p class="text2" style="font-size: 15px; color: orange; margin: 5px 0 0 0">${item.body}</p>
            `
        main.append(block)
    })




}

fetchData()