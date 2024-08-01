async function connect(email, password) {
    let url = 'http://localhost:3001/api/v1/user/login';
    let result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            email: email ,
            password: password
        }),
    })
    if(result.ok) {
        let data = await result.json();
        if(data.status == 400) {
            return false;
        }
        return data.body.token;
    }
}

async function getProfile(token) {
    let url = 'http://localhost:3001/api/v1/user/profile';
    let result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    })
    if(result.ok) {
        let data = await result.json();
        return data.body;
    }
}

async function editProfile(token, firstName, lastName) {
    let url = 'http://localhost:3001/api/v1/user/profile';
    let result = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ 
            firstName: firstName,
            lastName: lastName
        }),
    })
    if(result.ok) {
        let data = await result.json();
        return data.body;
    }
}

export { connect, getProfile, editProfile }