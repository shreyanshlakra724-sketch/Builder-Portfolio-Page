let navbar_links = document.querySelectorAll('[data-page]');
let home_page = document.querySelector('#home');
let about_page = document.querySelector('#about');
let contact_page = document.querySelector('#contact');
let cursor = document.querySelector('.cursor');

function revealPage(pageId) {

    let pages = [home_page, about_page, contact_page];
    pages.forEach(page => {
        page.style.display = 'none';
    });

    document.getElementById(pageId).style.display = 'block';

    window.location.hash = pageId;
}

navbar_links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        let pageId = link.getAttribute('data-page').toLowerCase();
        revealPage(pageId);

        navbar_links.forEach(link => {
            link.querySelector('a').classList.remove('active');
        });

    link.querySelector('a').classList.add('active');
    });
});





document.addEventListener('mousemove', (event) => {
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
});

let pageURL = window.location.hash.substring(1);

if (pageURL && document.getElementById(pageURL)) {
    let pages = [home_page, about_page, contact_page];

    pages.forEach(page => {
        page.style.display = 'none';
    });

    document.getElementById(pageURL).style.display = 'block';

    let activeLink = document.querySelector(`[data-page="${pageURL}"]`);
    activeLink.querySelector('a').classList.add('active');
}
else {
    revealPage('home');
}

let copy = document.querySelector('#copy');

console.log(copy);

copy.addEventListener('click', () => {
    navigator.clipboard.writeText('shreyanshlakra724@gmail.com')
    .then(() => {
        copy.textContent = 'Copied!';
    })

    
    setTimeout(() => {
        copy.textContent = 'Copy Email';
    }, 2000);
})




