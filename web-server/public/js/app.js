console.log('Client side javascript file is loaded')


fetchWeather = (location) => {
    fetch('/weather?address=' + encodeURIComponent(location)).then(response => {
        response.json().then((data) => {
            if (data.error) {
                return console.log(data.error)
            }
            
            console.log(data)
        })
    
    })
}

const weatherForm = document.querySelector('form')
const search = document.getElementById('location')
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    fetchWeather(location)

})








