let clock = document.querySelector('.c')
clock.innerHTML = 'Wanna see a clock?'
setInterval(()=>{
    let date = new Date()
    clock.innerHTML = date.toTimeString()
}, 1000)

let clock1 = document.querySelector('.c1')
clock1.innerHTML = 'Look at this clock?'
setInterval(()=>{
    let date = new Date()
    clock1.innerHTML = date.toTimeString()
}, 3000)

let clock2 = document.querySelector('.c2')
clock2.innerHTML = 'Where is a clock?'
setInterval(()=>{
    let date = new Date()
    clock2.innerHTML = date.toTimeString()
}, 5000)