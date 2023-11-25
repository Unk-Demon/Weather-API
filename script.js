document.addEventListener("DOMContentLoaded", function(){
    carga_clima();
});

function carga_clima(){
    const apiKey = "79ab85dd0b050389a227077cbc6b09c9";
    let ciudad = "Tijuana";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        mostrar_datos(data)
    })
    .catch(error => {
        console.error("Algo salió mal", error);
    })
}

function mostrar_datos(data){
    const msg_clima = document.getElementById("clima_msg");
    const msg_desc = document.getElementById("desc");

    const temperatura = data.main.temp;
    const desc = data.weather[0].description;

    msg_clima.innerHTML = temperatura;
    msg_desc.innerHTML = desc;
}