const profile=async(wardNo='null')=>{
    console.log('wardNo', wardNo);
    let token = localStorage.getItem('token')
    let res = await fetch(`${ROOT_URL}/api/common/profile/${wardNo}`, {
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
            document.getElementById('new-name').value = name
            document.getElementById('phone-no').innerHTML += `+91${phoneNumber}`
            document.getElementById('new-phoneNumber').value =phoneNumber
            document.getElementById('ward-no').innerHTML += wardNo
            document.getElementById('title').innerHTML += wardNo
        })
    }
}

if(localStorage.getItem('role')==='admin') profile(localStorage.getItem('wardNo'))
else profile()