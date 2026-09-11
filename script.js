let navbar_links = document.querySelectorAll('[data-page]');
let home_page = document.querySelector('#home');
let about_page = document.querySelector('#about');
let contact_page = document.querySelector('#contact');

function revealPage(pageId) {

    let pages = [home_page, about_page, contact_page];
    pages.forEach(page => {
        page.style.display = 'none';
    });

    document.getElementById(pageId).style.display = 'block';
}

navbar_links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        let pageId = link.getAttribute('data-page').toLowerCase();
        revealPage(pageId);
    });
});





