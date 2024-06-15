fetch('https://fakestoreapi.com/products?limit=10')
    .then(response => response.json())
    .then(date => createCards(date))
function createCards(users) {
    const container = document.getElementById('user-cards-container');

    users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'user-card';

        const img = document.createElement('img');
        img.className = 'img'
        img.src = user.image

        const title = document.createElement('h2');
        title.textContent = `Title: ${user.title}`;

        const description = document.createElement('p');
        description.textContent = `Price: ${user.description}`;

        card.appendChild(img)
        card.appendChild(title);
        card.appendChild(description);

        container.appendChild(card);
    })
}
