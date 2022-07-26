const editProfile=async(wardNo='null')=>{
    console.log('wardNo', wardNo);
    let token = localStorage.getItem('token')
    let body = {
        name: document.getElementById('new-name').value,
        phoneNumber: document.getElementById('new-phoneNumber').value
    }
    let res = await fetch(`${ROOT_URL}/api/admin/edit-profile/${wardNo}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body),
        mode: 'cors',
        // credentials: 'same-origin'
    })
    if(res.status===200) location.reload()
    else if(res.status===400) alert('Form Can\'t be incomplete')
    else alert('Something went wrong!')
}

document.getElementById('edit').addEventListener('click', ()=>{

    if(localStorage.getItem('role')==='admin') editProfile(localStorage.getItem('wardNo'))
    else editProfile()
})