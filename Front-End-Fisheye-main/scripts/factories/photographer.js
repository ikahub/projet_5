function photographerFactory(data) {
    const { name, portrait, price, city, country, tagline } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const h1 = document.createElement( 'h1' );
        const p = document.createElement( 'p' );
        const pun = document.createElement( 'p' );
        const pdeux = document.createElement( 'p' );
        p.textContent = tagline;
        h1.textContent = price;
        img.setAttribute("src", picture);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        pun.textContent = city;
        pdeux.textContent = country;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(pun);
        article.appendChild(pdeux);
        article.appendChild(p);
        article.appendChild(h1);
        return (article);
    }
    return { name, picture, price, getUserCardDOM }
}