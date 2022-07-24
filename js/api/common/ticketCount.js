const ticketCount=async()=>{
    let token = localStorage.getItem('token')
    let wardNo = 'null'
    if(localStorage.getItem('role')==='admin') wardNo = localStorage.getItem('wardNo')
    let res = await fetch(`${ROOT_URL}/api/ticket/ticket-count/${wardNo}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        mode: 'cors',
        credentials: 'same-origin'
    })
    // console.log(res);
    let data
    await res.json().then(res=>data=res.data)
    return data
    // if(res.status===200){
    //     let data
    //     await res.json().then(res=>data = res.data)
    //     return data
    // }
    // else{
    //     console.log('Something went wrong');
    // }
  
}