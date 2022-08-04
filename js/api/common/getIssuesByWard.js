const getIssuesByWard=async(wardNo='null')=>{
    console.log('hiii');
    let token = localStorage.getItem('token')
    let res = await fetch(`${ROOT_URL}/api/common/get-issues/${wardNo}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        mode: 'cors',
        // credentials: 'same-origin'
    })
    if(res.status===200){
        await res.json().then(res=>{
            console.log(res.data);
            document.getElementById('total-issues').innerHTML += res.data.length
            res.data.forEach(ticket=>{
                document.getElementById('issue').innerHTML +=`
                    
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
        })
    }
}
{/* <button onClick="isCollected(${ticket._id})" class="btn btn-primary" value="${ticket._id}">Mark as Completed</button> */}

if(localStorage.getItem('role')==='admin') getIssuesByWard(localStorage.getItem('wardNo'))
else getIssuesByWard()