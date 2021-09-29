const button = document.querySelector('#backdoor')
console.log(button)
button?.addEventListener('click', () => {
    console.log('here')
    // chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    //     chrome.tabs.executeScript(
    //         tabs[0].id,
    //         {code: "document.querySelector('body').innerHtml = ''"}
    //     )
    // })
})