//login

const sendLoginToApi = (data) =>{
    const bodyParams = {
        email: data.email,
        password: data.password,
    };
  return fetch('//localhost:4000/login', {
    method: 'POST',
    body: JSON.stringify (bodyParams),
    headers: {
        'Content-Type': 'application/json', 
    },
})
    .then((response) =>response.json())
    .then((data)=> {
        return data;
    });
};

//sign-up

const sendSingUpToApi = (data) =>{
    const bodyParams = {
        email: data.email,
        password: data.password,
        username: data.username,
    };
    return fetch('http://localhost:4000/sign-up', {
    method: 'POST',
    body: JSON.stringify (bodyParams),
    headers: {
        'Content-Type': 'application/json', 
    },
})
    .then ((response) => response.json())
    .then((data) => {
        return data
    });
};

const apiDoctor = {
    sendLoginToApi : sendLoginToApi,
    sendSingUpToApi : sendSingUpToApi,
}

export default apiDoctor;