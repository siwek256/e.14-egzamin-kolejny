console.clear()

function zamow() {
    numerksztaltu = document.getElementById("ksztalt-number").value
    nazwaksztaltu = "nie umiesz programować :P"
    if (numerksztaltu == 1) {
        nazwaksztaltu = "miś";
    } else if (numerksztaltu == 2) {
        nazwaksztaltu = "żabka";
    } else {
        nazwaksztaltu = "serce";
    }
    r_rgb = document.getElementById("r-rgb").value
    g_rgb = document.getElementById("g-rgb").value
    b_rgb = document.getElementById("b-rgb").value
    console.log(r_rgb)
    console.log(g_rgb)
    console.log(b_rgb)
    console.log(numerksztaltu)
    console.log(nazwaksztaltu)
    document.getElementById("wybrany-ksztalt").innerHTML = "Zamówiłeś żelka - " + nazwaksztaltu
    document.getElementById("wybrany-kolor-przycisk").style.color = 'rgb(' + r_rgb + ',' + g_rgb + ',' + b_rgb + ')';
    document.getElementById("wybrany-kolor-przycisk").style.backgroundColor = 'rgb(' + r_rgb + ',' + g_rgb + ',' + b_rgb + ')';
    console.clear()
}
