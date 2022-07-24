const profile=async()=>{
    let token = localStorage.getItem('token')
    let res = await fetch(`${ROOT_URL}/api/ward-admin/profile`, {
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
            let {name, phoneNumber, wardNo} = res.data
            document.getElementById('name').innerHTML += name
            document.getElementById('phone-no').innerHTML += `+91${phoneNumber}`
            document.getElementById('ward-no').innerHTML += wardNo
            document.getElementById('title').innerHTML += wardNo
        })
    }
}

profile()