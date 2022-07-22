const login=async(phoneNumber)=>{
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let res = await fetch(`${ROOT_URL}/api/auth/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        mode: 'cors',
        body: JSON.stringify({
            "phoneNumber": phoneNumber
        }),
        credentials: 'same-origin'
    })
    if(res.status===200){
        await res.json().then(res=>{ 
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('phoneNumber', phoneNumber)
        })
        location.replace('./otp.html')
    }
    else{
        alert('Invalid Phone Number')
    }
}