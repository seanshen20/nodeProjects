const a = ()=> new Promise(resolve => {
    setTimeout(() => {
        resolve('Done')
    }, 2000);
})

a().then(text => {
    console.log(text)
    return a()
}).then(text => console.log(text, '-version2'))
// b = async () => {
//     const aa= await a()
//     console.log(aa)
//     console.log('aaa')
// }

// b()

const fetch = callback => {
    setTimeout(() => {
        callback('Done2 - unblock ')
    }, 2000);
}

fetch(text => console.log(text, ' callback'))