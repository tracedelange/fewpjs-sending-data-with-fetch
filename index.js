


function submitData(username, email) {
    const formData = {
        name: username,
        email: email
    }

    const postConfigObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch('http://localhost:3000/users', postConfigObject)
        .then(function(response){
            return response.json();
        })
        .then(function (data) {
            const body = document.getElementsByTagName('body')[0]
            let id = document.createElement('p')
            id.innerHTML = data.id
            body.appendChild(id)
        })
        .catch(function(error){
            console.log(error.message)
            const body = document.getElementsByTagName('body')[0]
            let errorMessage = document.createElement('p')
            errorMessage.innerHTML = error.message
            body.appendChild(errorMessage)
        })
}