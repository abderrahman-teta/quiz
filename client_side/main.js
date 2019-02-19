const url = "http://localhost:8080/student/login"

fetch(url ,{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({a: 1, b: 'Textual content'})
}).then(data =>{
    return data.json()
    
}).then(re =>{
    console.log(re);
    
})