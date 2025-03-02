// Show Todays Date
const today = new Date();
        const options = { weekday: 'long' };
        const day = today.toLocaleDateString('en-US', options);
        const dateOptions = { month: 'long', day: 'numeric', year: 'numeric' };
        const date = today.toLocaleDateString('en-US', dateOptions);
       
        
        document.getElementById("date-display").innerHTML = `${day} , <br> <span class="font-bold"> ${date} </span>`;
// The Button Rndom Value
document.getElementById("theme-btn").addEventListener('click', function(){
    document.body.style.backgroundColor =`#${Math.floor(Math.random()*16777215).toString(16)}`;
})

//  Complete Button
// Accessing Assigned Task 
let assigned = document.getElementById("assigned-task").innerText;
console.log(assigned );
let assignedTask = parseInt (assigned);
// Accessing Completed Task
let completedTask = document.getElementById("completed-task").innerText;
console.log(completedTask);
let taskDone = parseInt(completedTask);



    
    


// fix-mobile
const completeBtn = document.getElementById("fix-mobile");
completeBtn.addEventListener("click", function(){
    alert("Board Updated Success Fully");
    taskDone = taskDone + 1;
    assignedTask = assignedTask -1;
   

    document.getElementById("completed-task").innerText = taskDone;
    document.getElementById("assigned-task").innerText = assignedTask;
    // Disabling the button
    completeBtn.classList.add("opacity-50");
    completeBtn.disabled = true;
    if (assignedTask == 0)
        {
            alert("Congrats!!! You have completed all the current task.");
        }
        const today = new Date();
        const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        const time = today.toLocaleTimeString('en-US', timeOptions);
    
    const container = document.getElementById("message");

    const p = document.createElement("p");
    p.innerHTML = `<p class = "bg-[#F4F7FF] rounded-xl p-4"> You have completed the task Fix Mobile Button Issue  at ${time} </p>`;
    container.appendChild(p);
    

})
// add-pay

const completeBtnPay = document.getElementById("add-pay");
completeBtnPay.addEventListener("click", function(){
    alert("Board Updated Success Fully");
    taskDone = taskDone + 1;
    assignedTask = assignedTask -1;

    document.getElementById("completed-task").innerText = taskDone;
    document.getElementById("assigned-task").innerText = assignedTask;
    // Disabling the button
    completeBtnPay.classList.add("opacity-50");
    completeBtnPay.disabled = true;
    if (assignedTask == 0)
        {
            alert("Congrats!!! You have completed all the current task.");
        }
        const today = new Date();
        const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        const time = today.toLocaleTimeString('en-US', timeOptions);
        const container = document.getElementById("message");
        const p = document.createElement("p");
        p.innerHTML = `<p class = "bg-[#F4F7FF] rounded-xl p-4"> You have completed the Add Dark Mode  at ${time} </p>`;
        container.appendChild(p);

})
// add-new

const completeBtnNew = document.getElementById("add-new");
completeBtnNew.addEventListener("click", function(){
    alert("Board Updated Success Fully");
    taskDone = taskDone + 1;
    assignedTask = assignedTask -1;

    document.getElementById("completed-task").innerText = taskDone;
    document.getElementById("assigned-task").innerText = assignedTask;
    // Disabling the button
    completeBtnNew.classList.add("opacity-50");
    completeBtnNew.disabled = true;
    if (assignedTask == 0)
        {
            alert("Congrats!!! You have completed all the current task.");
        }
        const today = new Date();
        const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        const time = today.toLocaleTimeString('en-US', timeOptions);
        const container = document.getElementById("message");
        const p = document.createElement("p");
        p.innerHTML = `<p class = "bg-[#F4F7FF] rounded-xl p-4"> You have completed the task Optimise Home Page  at ${time} </p>`;
        container.appendChild(p);

})
// fix-video

const completeBtnFix = document.getElementById("fix-video");
completeBtnFix.addEventListener("click", function(){
    alert("Board Updated Success Fully");
    taskDone = taskDone + 1;
    assignedTask = assignedTask -1;

    document.getElementById("completed-task").innerText = taskDone;
    document.getElementById("assigned-task").innerText = assignedTask;
    // Disabling the button
    completeBtnFix.classList.add("opacity-50");
    completeBtnFix.disabled = true;
    if (assignedTask == 0)
        {
            alert("Congrats!!! You have completed all the current task.");
        }
        const today = new Date();
        const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        const time = today.toLocaleTimeString('en-US', timeOptions);
        const container = document.getElementById("message");
        const p = document.createElement("p");
        p.innerHTML = `<p class = "bg-[#F4F7FF] rounded-xl p-4"> You have completed the task Add New Emoji  at ${time} </p>`;
        container.appendChild(p);

})

// Ai-search

const completeBtnAi = document.getElementById("ai-search");
completeBtnAi.addEventListener("click", function(){
    alert("Board Updated Success Fully");
    taskDone = taskDone + 1;
    assignedTask = assignedTask -1;

    document.getElementById("completed-task").innerText = taskDone;
    document.getElementById("assigned-task").innerText = assignedTask;
    // Disabling the button
    completeBtnAi.classList.add("opacity-50");
    completeBtnAi.disabled = true;
    if (assignedTask == 0)
        {
            alert("Congrats!!! You have completed all the current task.");
        }
        const today = new Date();
        const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        const time = today.toLocaleTimeString('en-US', timeOptions);
        const container = document.getElementById("message");
        const p = document.createElement("p");
        p.innerHTML = `<p class = "bg-[#F4F7FF] rounded-xl p-4"> You have completed the task Integrate Open Ai Api  at ${time} </p>`;
        container.appendChild(p);

})

// Review Site

const completeBtnReview = document.getElementById("review-site");
completeBtnReview.addEventListener("click", function(){
    alert("Board Updated Success Fully");
    taskDone = taskDone + 1;
    assignedTask = assignedTask -1;

    document.getElementById("completed-task").innerText = taskDone;
    document.getElementById("assigned-task").innerText = assignedTask;
    // Disabling the button
    completeBtnReview.classList.add("opacity-50");
    completeBtnReview.disabled = true;
    if (assignedTask == 0)
        {
            alert("Congrats!!! You have completed all the current task.");
        }
        const today = new Date();
        const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        const time = today.toLocaleTimeString('en-US', timeOptions);
        const container = document.getElementById("message");
        const p = document.createElement("p");
        p.innerHTML = `<p class = "bg-[#F4F7FF] rounded-xl p-4"> You have completed the task Improve Job Searching  at ${time} </p>`;
        container.appendChild(p);

})
// clear history
document.getElementById("clear").addEventListener("click", function(){
    const container = document.getElementById("message");
    container.innerText = "";
    

})


//  Message





