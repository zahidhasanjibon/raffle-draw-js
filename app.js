
const txtarea = document.querySelector('#txtarea')
const dsparea = document.querySelector('#dsparea')
const showbtn = document.querySelector('#showbtn')
const trybtn = document.querySelector('#trybtn')
const lists = document.querySelector('#uliteam')
const nameList = document.querySelector('#name-list')
let firstPosition = document.querySelector('#first')
let secondPosition = document.querySelector('#second')
let thirdPosition = document.querySelector('#third')

const participants = []


    const createLiItem = (el) => {
        let li = document.createElement('li')
        li.innerText = el
        li.className = 'list-group-item'
        nameList.appendChild(li)
    }

txtarea.addEventListener('keypress',(e) => {
    if(e.key == 'Enter') {
        let allNames = e.target.value.split(',')
        if(allNames[0] !== ''){
           allNames.forEach((names) =>{
            participants.push(names)
            createLiItem(names)
            e.target.value = ''
           })
          
        }
    }
})

trybtn.addEventListener('click', () => {
    if(participants.length == 0) {
        alert('there is no entry name yet')
    } else {

        let shuffledNames = shuffle(participants)
        for(let i = 1; i < shuffledNames.length; i++) {

            (function (i,count) {

                setTimeout(() => {
                    let rand = Math.floor(Math.random() * shuffledNames.length)
                    dsparea.value = shuffledNames[rand]

                    if(count == shuffledNames.length - 1){
                        if(!firstPosition.innerHTML){
                            firstPosition.innerHTML = shuffledNames[rand]
                            let ind = participants.indexOf(shuffledNames[rand])
                            participants.splice(ind,1)
                        } else if(!secondPosition.innerHTML){
                            secondPosition.innerHTML = shuffledNames[rand]
                            let ind = participants.indexOf(shuffledNames[rand])
                            participants.splice(ind,1)
                        } else if(!thirdPosition.innerHTML){
                            thirdPosition.innerHTML = shuffledNames[rand]
                            let ind = participants.indexOf(shuffledNames[rand])
                            participants.splice(ind,1)
                            trybtn.disabled = true;
                        } else {
                            alert('raffle draw already completed')
                        }
                    }

                },i)

            })(i*100,i)

        }
    }
})

function shuffle(arr) {
    let shuffledArr = [...arr]
    for(var i = arr.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1))
        let temp = shuffledArr[rand]
        shuffledArr[rand] = shuffledArr[i]
        shuffledArr[i] = temp
    }
    return shuffledArr
}
