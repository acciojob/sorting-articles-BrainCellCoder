const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const bandElement = document.getElementById('band');
function stripArticle(bandName) {
    return bandName.replace(/^(a |an |the )/i, '').trim();
}
const sortedBands = bands.sort((a, b) => {
    const bandA = stripArticle(a);
    const bandB = stripArticle(b);
    return bandA.localeCompare(bandB);
});
let list = '';
sortedBands.forEach(b => {
    list += `<li>${b}</li>`;
});

bandElement.innerHTML = list;