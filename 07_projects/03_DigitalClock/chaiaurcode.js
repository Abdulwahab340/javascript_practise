const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

// clock ka ander date display karwani a aab



setInterval(function(){
    let date = new Date();
// console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();
},1000);
