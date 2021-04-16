const form = document.querySelector('form');
const newsInput = document.querySelector('.newsInput');
const button = document.querySelector('.button');
const inform = document.querySelector('.inform');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let data = new FormData(event.target);
    console.log(data.get('newsInput'));

    const url = 'https://content.guardianapis.com/search';
    const apiKey = '3ae4a796-1d49-4d04-8974-e3962e2fb188';
    const query = data.get('newsInput');

    fetch(`https://content.guardianapis.com/search?q=${query}&api-key=3ae4a796-1d49-4d04-8974-e3962e2fb188`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            data.response.results.forEach(item => {
            let newElement = document.createElement('ul');
            newElement.innerHTML = `<li><a href="${item.webUrl}">${item.webTitle}</a></li>`;
            inform.append(newElement);
    });
});
});