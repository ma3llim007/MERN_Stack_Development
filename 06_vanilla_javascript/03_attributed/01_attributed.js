let h1 = document.querySelector("h1");
(h1.getAttribute('class'))

h1.setAttribute("exmaple", "test");

for (let attribute of h1.attributes ) {
    console.log(`Attribute: ${attribute.name} And It Value ${attribute.value}`);
}