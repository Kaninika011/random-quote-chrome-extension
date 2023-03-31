fetch('https://api.quotable.io/random')
.then(data => data.json())
.then(quoteData => {
    const quoteContent = quoteData.content;
    const quoteElement = document.getElementById('quoteElement');

    quoteElement.innerHTML = quoteContent;
})