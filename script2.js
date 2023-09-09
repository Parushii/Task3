let p=fetch('https://se-tasks.vercel.app/events');
p.then((value1)=>{
	return value1.json(); 
}).then((value2)=>{
	console.log(value2);
    appendData(value2);
    eventDetails(value2,"64d00d6a334f0b75efa8eb6f");
}).catch((err)=>{
    console.log(err);
})

function appendData(data){
    let table=document.querySelector('table tbody');
    for(var i=0;i<data.length;i++){
        table.innerHTML+=`<tr>
        <td>${data[i].name}</td>
        <td>${data[i].date}</td>
        <td>${data[i].time}</td>
        <td>${data[i].venue}</td>
        </tr>`;
    }
}
function eventDetails(data,id){
    let div=document.querySelector('.details');
    for(var i=0;i<data.length;i++){
        if(data[i]._id==id){
            div.innerHTML+=`<div><span>Name:</span> ${data[i].name}</div>
            <div><span>Date:</span> ${data[i].date}</div>
            <div><span>Time:</span> ${data[i].time}</div>
            <div><span>Venue:</span> ${data[i].venue}</div>
            <div><span>Description:</span> ${data[i].description}</div>
            <div><span>TicketPrice:</span> ${data[i].ticketPrice}</div>
            <div><span>Available seats:</span> ${data[i].availableTickets}</div>`;
        }
    }
    
}

