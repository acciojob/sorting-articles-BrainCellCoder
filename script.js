//your JS code here. If required.

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const bandElement = document.getElementById('band');
let list = '';
bands.forEach(b => {
    list += `<li>${b}</li>`;
});

bandElement.innerHTML = list; 