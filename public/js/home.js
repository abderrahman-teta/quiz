(async()=>{

    const input = document.getElementById("title")

    let list = [] 

    const url = 'http://localhost:3000/exam/getexamlist'

    const xhr = new XMLHttpRequest()

    xhr.open('GET',url,true)

    xhr.onload = () =>{

        data = JSON.parse(xhr.responseText)

        data.exams.forEach(exam => {
            list.push(exam.title)
        })

        new Awesomplete(input, {
            list:list
        })
        
    }
    xhr.send()
        
})()
