const getCompletedTicket=async(wardNo='null')=>{
    let token = localStorage.getItem('token')
    let res = await fetch(`${ROOT_URL}/api/ticket/get-completed-ticket/${wardNo}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        mode: 'cors',
        // credentials: 'same-origin'
    })
    console.log(res);
    // let data
    await res.json().then(res=>{
        if(res.data.length!==0){
            res.data.forEach(ticket=>{
                document.getElementById('completed-ticket').innerHTML +=`
                
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${ticket.address} ${ticket.pincode}</h5>
                        <p class="card-text">Name : ${ticket.name}</p>
                        <p class="card-text">Phone Number : ${ticket.phoneNumber}</p>
                        <p class="card-text">House No : ${ticket.houseNo}</p>
                        <p class="card-text">Waste : ${ticket.waste}</p>
                    </div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;    
                &nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;&nbsp;&nbsp;&nbsp; 
                `
            })
        }
    })
    // console.log(data);
    // return data
    
}

if(localStorage.getItem('role')==='admin') getCompletedTicket(localStorage.getItem('wardNo'))
else getCompletedTicket()