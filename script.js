const date = new Date();  // at first we create a date Object. in Order to do that we need a Date Object Constructor Function: The Date Object returns the current date in time. also it specifies the browsers timezone and returns this data as a full text string.

const renderCalender = () => {
    date.setDate(1);

    //console.log(date.getDay());
    
    //date.setMonth(5);  with the setMonth method I can change the current month in order to see if everything worked correctly
    
    const monthDays = document.querySelector(".days")
    
    const lastDay = new Date(date.getFullYear
    (), date.getMonth()+1,0).getDate();
    
    const prevLastDay = new Date(date.getFullYear
    (), date.getMonth(),0).getDate();
    
    //console.log(prevLastDay); 30 is the output because april has 30 days
    
    const firstDayIndex = date.getDay();
    
    const lastDayIndex = new Date(date.getFullYear
        (), date.getMonth()+1,0).getDay();
    
        
    
    //const month = date.getMonth();  // Display the current month using JavaSkript. In order to get the current month we need to use one of the date objects, called getMonth()
    
    //console.log(month); here you see now 4 because the current month is May 
    
    const nextDays = 7 - lastDayIndex - 1;
    
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    
    //Display the current Month: select the h1 heading element and we change its content. in order to do that we need to use one of the DOM properties .innerHTML, then we have to use our arry months[] and specify the index number. we enter here manually 4 and get rid of May in the h1 element of the html. and there is still may in the browser
    document.querySelector('.date h1').innerHTML 
    =months[date.getMonth()];  // so in order to display the proper month we have to use the getMonth method. then it's displayed dynamicly using JavaSkript
    
    // Display the date: first we select the paragraph using the query selector method. in order to change the content of the element we need to use the html property .innerHTML . 
    //  we are using the method called toDateString() which returns the current Date in a readable format
    //  finaly we remove the content from HTLM: (Fri May 24, 2022), then we will get exact the same result
    document.querySelector('.date p').innerHTML
    = new Date().toDateString(); 
    
    // Display the days: in order to display the days we will use a forLoop
    let days = "";
    
    // here we can see the previous days from the last month
    for(let x = firstDayIndex; x > 0; x--) {
      days += `<div class="prev-date">${prevLastDay - x +1}</div>`
    }
    
    for(let i = 1; i <= lastDay; i++){  // the i variable is the counter
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){    // Highlight the current date
            days += `<div class="today">${i}</div>`;
        }else{
            days += `<div>${i}</div>`; // we create a div element and pass the i variable as the content of it
        }
          
    }
    
    // here we can see in the browser the first days of the next month
    for(let j = 1; j <= nextDays; j++){             // here we can see in the browser the first days of the next month
        days += `<div class="next-date">${j}</div>`
        monthDays.innerHTML = days;
    }
    
}


// To make the arrows work... left arrow for the previous month and right arrow for the next month
document.querySelector('.prev').addEventListener('click',() =>{
    date.setMonth(date.getMonth()-1);
    renderCalender();
});

document.querySelector('.next').addEventListener('click',() =>{
    date.setMonth(date.getMonth()+1);
    renderCalender();
})

renderCalender();