const getAllAdmin=async()=>{
    let token = localStorage.getItem('token')
    let res = await fetch(`${ROOT_URL}/api/admin/get-all-admin`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        mode: 'cors',
        credentials: 'same-origin'
    })
    if(res.status===200){
        let data
        await res.json().then(res=>data = res.data)
        return data
    }
    else{
        console.log('Something went wrong');
    }
  
}