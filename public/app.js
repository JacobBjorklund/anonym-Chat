let users = prompt('Whats ur name')

render()

async function render() {
    const res = await fetch('/api/messages')
    let data = await res.json()
    console.log(data);
    document.querySelector('#messages').innerHTML = `
    ${data.map(message => `<div><h1>${message.user}</h1><h1>${message.messages} </h1> <p> ${new Date(message.timeStamp).toDateString()} </p> </div>`).join('')}
    `
}

document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault()
    const input = document.querySelector('input').value
    console.log(input)
    const data = {
        message: input,
        user: users
    };

    fetch('/api/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })


    render()
})
