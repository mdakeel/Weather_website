  const cityName = document.getElementById('cityName');
  const submitBtn = document.getElementById('submitBtn');

  const city_name = document.getElementById('city_name');

  const temp = document.getElementById('temp');

  const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal === ""){
        city_name.innerText = `Plz write the name befor search`;
    }else{
        try  {      
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=2ce0469c99b89268b4909e0b53255b8e`;
            const response = await fetch(url);
            const data = await response.json()
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
        }catch{
            city_name.innerText = `Plz enter the city name properly`;
        }

    }
  }

  submitBtn.addEventListener("click", getInfo);

//   https://api.openweathermap.org/data/2.5/weather?q=loni&units=metric&appid=2ce0469c99b89268b4909e0b53255b8e