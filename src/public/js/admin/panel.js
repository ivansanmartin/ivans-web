let isRotated = false;
let isDisplayLink = false;

document.getElementById('dropdown-btn').addEventListener('click', () => {
    let rotation = isRotated ? 0 : 90;
    document.getElementById('dropdown-icon').setAttribute('style', 'transform:rotate(' + rotation + 'deg);');
    isRotated = !isRotated;
    isDisplayLink ? document.getElementById('button-links').style.display = "none" : document.getElementById('button-links').style.display = "block";
    isDisplayLink = !isDisplayLink;



    
});
