function add() {
    let word = document.getElementById('add-input').value
    let div = document.createElement('div')
    div.id = word
    div.textContent = 'The word has been added!'
    document.getElementById('add-container').append(div)
    document.getElementById('add-input').value = ''
}

function find() {
    let word = document.getElementById('find-input').value
    if (document.getElementById(word) != null) {
        let div = document.createElement('div')
        div.textContent = 'Word Found!'
        document.getElementById('find-container').append(div)
    } else {
        let div = document.createElement('div')
        div.textContent = 'Sorry. The word was not found!'
        document.getElementById('find-container').append(div)
    }
    document.getElementById('find-input').value = ''
}