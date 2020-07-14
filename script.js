let inpCity = document.querySelector('#input');

function search(){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inpCity.value}&appid=0e261e518672ac93c76ea3174c7eab7e`)
        .then( function (resp) { return resp.json() } )
        .then( function (data) {
            console.log(data);
            document.querySelector('#name').innerHTML = data.name;
            let temps = document.querySelector('#temp');
            if( data.main.temp - 273 > 0  ){
                temps.innerHTML = '+' + Math.round(+data.main.temp - 273) + '&deg;'; // Math.round - округление
            }else{
                temps.innerHTML = '-' + Math.round(+data.main.temp - 273) + '&deg;'; // Math.round - округление
            }
            document.querySelector('#weather').innerHTML = data.weather[0]['description'];
            document.querySelector('#icon').src = `https://openweathermap.org/img/wn/${data.weather[0]['icon']}.png`;
            document.querySelector('#country').innerHTML = data.sys.country;
            if( data.main.temp_max - 273 > 0 ){
                document.querySelector('#temp__max').innerHTML = `Temp max: +${Math.round(+data.main.temp_max - 273)}&deg;`;
            }else{
                document.querySelector('#temp__max').innerHTML = `Temp max: -${Math.round(+data.main.temp_max - 273)}&deg;`;
            }
            if( data.main.temp_min - 273 > 0 ){
                document.querySelector('#temp__min').innerHTML = `Temp min: +${Math.round(+data.main.temp_min - 273)}&deg;`;
            }else{
                document.querySelector('#temp__min').innerHTML = `Temp min: -${Math.round(+data.main.temp_min - 273)}&deg;`;
            }
        })
        .catch(function (){
            // catch any errors
        })

}

document.querySelector('.button').onclick = search;
