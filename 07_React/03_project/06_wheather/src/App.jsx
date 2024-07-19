import { useEffect, useState } from "react"
const apiObject = {
  api_key: '92d925bbf8e7b33a7696120eb71bb279',
  api_base: 'https://api.openweathermap.org/data/2.5/',
}
const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const searchWhether = (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      if (query !== '') {
        fetch(`${apiObject.api_base}weather?q=${query},&units=metric&APPID=${apiObject.api_key}`)
          .then((response) => response.json())
          .then(result => {
            if (result.cod !== '404') {
              setWeather(result);
              setQuery('');
            } else {
              alert(result.message) / 2;
            }
          });
      }
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  }

  return (
    <>
      <div className="d-flex justify-content-center align-content-center flex-wrap" style={{ height: "80vh" }}>
        <div className="container mt-4">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <div className="mb-3">
                <input required type="text" className="form-control" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyUp={searchWhether} />
              </div>
            </div>
          </div>
        </div>
        {
          (typeof weather.main != 'undefined') ?
            (<div className="container mt-3">
              <div className="row d-flex justify-content-center">
                <div className="col-md-8">
                  <div className="card text-center">
                    <div className="card-header">{weather.weather[0]?.main}</div>
                    <div className="card-body">
                      <h2 className="card-title">{weather?.name}, {weather.sys?.country}</h2>
                      <p className="card-text">{dateBuilder(new Date())}</p>
                      <h1 className="card-title fs-1 fw-bold text-primary">{Math.floor(weather.main.temp)}<sup>°C</sup></h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>)
            : ('')
        }
      </div>
    </>
  )
}

export default App