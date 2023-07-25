const  endDate= "26 July 2023 10:00 PM";

document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input");
console.log("hi",inputs);

// const clock = ( => {

// })
function clock(){
    const end  = new Date(endDate);
    const now = new Date()
    console.log(end);
    console.log(now);
    const diff =  (end -now)/1000;

    if (diff < 0) return;
    // convert into days;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}




clock()


setInterval(
    () => {
        clock()
    },
    1000
)


// 1 days = 24 hours
// 1 hour = 60 minutes
//  1 min = 60 sec