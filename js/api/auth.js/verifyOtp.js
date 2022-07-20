const verifyOtp=async(otp)=>{
    const token = localStorage.getItem('token')
    let res = await fetch(`${ROOT_URL}/api/auth/verify-otp`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        mode: 'cors',
        body: JSON.stringify({
            "otp": otp
        }),
        credentials: 'same-origin'
    })
    if(res.status===200){
        await res.json().then(res=>{ 
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('role', res.data.role)
            localStorage.setItem('second', true)
        })
        location.replace('./dashboard.html')
    }else{
        alert('Wrong OTP')
    }
}