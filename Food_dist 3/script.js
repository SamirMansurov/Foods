const open_btns = document.querySelectorAll('button[data-modal]')
const close_btns = document.querySelectorAll('[data-close]')
const modal = document.querySelector('.modal')

function modalTrigger(arr, action) {
    arr.forEach((btn) => {
        btn.onclick = () => {
            modal.classList[action]('show', 'fade')
    }
    })

}

modalTrigger(open_btns, 'add')
modalTrigger(close_btns, 'remove')

// slider
const slides = document.querySelectorAll('.offer__slide')
const next_btn = document.querySelector('.offer__slider-next')
const prev_btn = document.querySelector('.offer__slider-prev')

let currentJs = 1
let sliderIndex = 0



function Showslider() {
    slides.forEach((slide) => slide.classList.add('hide'))
    slides[sliderIndex].classList.remove('hide')
}

next_btn.onclick = () => {
    sliderIndex++
}




// Питание
const button_tab = document.querySelectorAll('.tabheader__item')
const tabcontent = document.querySelectorAll('.tabcontent')

function TabShow(idx) {
    tabcontent.forEach(item => item.classList.add('hide', 'fede'))
    tabcontent[idx].classList.remove('hide')
}

button_tab.forEach((btns, idx) =>  {
    btns.onclick =() => {
        button_tab.forEach(elem => elem.classList.remove('tabheader__item_active'))
        btns.classList.add('tabheader__item_active')
        TabShow(idx)
    }
})


// timer

const deatline = '2024-05-07  00:00'

function getRemainingTime(endTime) {

    const t = Date.parse(endTime) - Date.parse(new Date())
    const days = Math.floor((t / 1000) / 60 / 60 / 24)
    const hours = Math.floor((t / 1000) / 60 / 60 % 24)
    const minutes= Math.floor((t / 1000) / 60 % 60)
    const seconds = Math.floor((t / 1000) % 60)

    return {
        t,
        days,
        hours,
        minutes,
        seconds
    }
}

function setTimer (endTime, selector) {
    const t = document.querySelector(selector)

    const days = t.querySelector('#days')
    const hours = t.querySelector('#hours')
    const minutes = t.querySelector('#minutes')
    const seconds= t.querySelector('#seconds')
    let interval =  setInterval (updateTimer, 1000)
  

updateTimer()
   function updateTimer () {
      const t = getRemainingTime(endTime)


    if(t.t <= 0) {
        clearInterval(interval)
     }
  
    
      days.innerHTML = t.days
      hours.innerHTML = t.hours
      minutes.innerHTML = t.minutes
      seconds.innerHTML = t.seconds



      
    //   function randomInRange(min, max) {
    //     return Math.random() * (max - min) + min;
    //   }
    //   confetti({
    //     angle: randomInRange(55, 125),
    //     spread: randomInRange(50, 70),
    //     particleCount: randomInRange(50, 100),
    //     origin: { y: 0.6 },
    //   });
 }


}

setTimer(deatline, '.timer')









// calc

const genderBtns = document.querySelectorAll('#gender .calculating__choose-item')
const inputs = document.querySelectorAll('.calculating__choose_medium input')
const act_btns = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')
const result_view = document.querySelector('#result') 



const user = {
    gender: "woman",

}


genderBtns.forEach((btn) => {
    btn.onclick = () => {
        const g = btn.getAttribute('data-gender')
        user.gender = g


        genderBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')
    }
})


inputs.forEach(inp => {
    inp.oninput = () => {
        user[inp.name] = inp.value
    }
})


act_btns.forEach((btn) => {
    btn.onclick = () => {
        const act = +btn.getAttribute('data-act')

        if(user.gender === 'woman') {
            const result = 655.1 + (9.563 * user.weight) + (1.85 * user.height) - (4.676 * user.age)

          result_view.innerHTML =  Math.round(result * act);
        } else {
            const result = 66.5 + (13.75 * user.weight) + (5.003 * user.height) - (6.775 * user.age)

            result_view.innerHTML = Math.round(result * act);
        }

        act_btns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')
    }
})






// якорная ссылка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});








