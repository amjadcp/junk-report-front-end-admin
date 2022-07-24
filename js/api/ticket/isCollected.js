// const isCollected =async(ticketId)=>{
//     let token = localStorage.getItem('token')
//     let res = await fetch(`${ROOT_URL}/api/ticket/is-collect/${ticketId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         },
//         mode: 'cors',
//         // credentials: 'same-origin'
//     })
//     if(res.status===200) alert('The Ticket Mark as Completed')
//     else alert('Something went wrong')
// }