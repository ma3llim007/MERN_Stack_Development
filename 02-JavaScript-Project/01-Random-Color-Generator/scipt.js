const GetColor = () => {
    // Create Hex Value
    const RandomNumber = Math.floor(Math.random()*16777215);
    const RandomColor = '#' + RandomNumber.toString(16);
    document.body.style.backgroundColor = RandomColor;    
    document.getElementById("code").innerText = RandomColor;
    
    navigator.clipboard.writeText(RandomColor);
}
document.getElementById("button").addEventListener("click", GetColor);
GetColor()