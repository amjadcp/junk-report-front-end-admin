const createWard=async(wardNo, name, phoneNumber)=>{
    let token = localStorage.getItem('token')
    let res = await fetch(`${ROOT_URL}/api/admin/create-ward`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        mode: 'cors',
        body: JSON.stringify({
            "wardNo": wardNo
        }),
        credentials: 'same-origin'
    })

    if(res.status===201){
        let wardId
        let wardNo
        await res.json().then(res=>{
            wardId = res.data.wardId
            wardNo = res.data.wardNo
        })
        console.log(wardNo);
        res = await fetch(`${ROOT_URL}/api/admin/create-admin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                mode: 'cors',
                body: JSON.stringify({
                    wardId,
                    wardNo,
                    name,
                    phoneNumber
                }),
                credentials: 'same-origin'
        })
        if(res.status===201){
            alert('Successfully Created')
            location.reload()
        }
        else{
            alert('Phone Number Already Exist')
            location.reload() 
        }
    }else{
        alert('Ward Number Exist')
        location.reload()
    }
}