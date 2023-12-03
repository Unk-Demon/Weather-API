let ciudad = document.getElementById("cityText");

/*document.addEventListener("DOMContentLoaded", function(){
    carga_clima();
});*/

function carga_clima(){
    const apiKey = "79ab85dd0b050389a227077cbc6b09c9";
    //let ciudad = "Tijuana";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad.value}&appid=${apiKey}&units=metric&lang=sp`;

    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        mostrar_datos(data)
    })
    .catch(error => {
        console.error("Algo salió mal", error);
        alert("No se encontró la ciudad");

        const msg_clima = document.getElementById("clima_msg");
        const msg_desc = document.getElementById("desc");
        const msg_humedad = document.getElementById("humedad");
        const msg_tempMax = document.getElementById("tempMax");
        const msg_tempMin = document.getElementById("tempMin");

        msg_clima.innerHTML = "Favor de ingresar el nombre correcto de la ciudad";
        msg_desc.innerHTML = "";
        msg_humedad.innerHTML = "";
        msg_tempMax.innerHTML = "";
        msg_tempMin.innerHTML = "";
    })
}

function mostrar_datos(data){
    let h1 = document.getElementById("h1Text");
    h1.innerHTML = "Clima de " + ciudad.value;

    const msg_clima = document.getElementById("clima_msg");
    const msg_desc = document.getElementById("desc");
    const msg_humedad = document.getElementById("humedad");
    const msg_tempMax = document.getElementById("tempMax");
    const msg_tempMin = document.getElementById("tempMin");

    const temperatura = data.main.temp;
    const desc = data.weather[0].description;
    const humedad = data.main.humidity;
    const tempMax = data.main.temp_max;
    const tempMin = data.main.temp_min;

    msg_clima.innerHTML = "Temperatura actual: " + temperatura + "°C";
    msg_desc.innerHTML = "Descripción: " + desc;
    msg_humedad.innerHTML = "Humedad: " + humedad + "%";
    msg_tempMax.innerHTML = "Temperatura máxima: " + tempMax + "°C";
    msg_tempMin.innerHTML = "Temperatura mínima: " + tempMin + "°C";
}