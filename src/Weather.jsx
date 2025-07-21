import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';





function Weather() {
    return (
        <div className="container" id="weather">
        
            <h1 className="mt-5 mb-0 p-0 fw-bolder">Jamaica</h1>
<div className="container weather-info d-flex justify-content-between mt-1">

<ul className="mt-0 p-0">
    <li className="text-dark text-opacity-50">Saturday 14:59, broken clouds</li> 
    <li className="text-dark text-opacity-50">Humidity: <span className="text-danger">83%</span>, Wind: <span className="text-danger">5.66km/h</span></li>
</ul>


 <div className="mainTemp" id="mainTemp1">15<span className="cel fs-6 position-absolute">°C</span></div>
</div>

 <div className="row text-center mt-0 fs-5">
<div className="col-2">
        <div className="days">Sat</div>
        <div><i class="bi bi-sun"></i></div> 
        <div className="text-danger">21° <span className="temp2 text-danger text-opacity-50">14°</span></div>
</div>
 <div className="col-2">
        <div className="days">Sun</div>
        <div><i class="bi bi-cloud-lightning-rain"></i></div>
        <div className="temp1 text-danger">10° <span className="temp2 text-danger text-opacity-50">14°</span></div>
</div>
<div className="col-2">
        <div className="days">Mon</div>
        <div>☁️</div>
        <div className="temp1 text-danger">11° <span className="temp2 text-danger text-opacity-50">15°</span></div>
</div>
<div className="col-2">
        <div className="days">Tue</div>
        <div>⛅</div>
        <div className="temp1 text-danger">22° <span className="temp2 text-danger text-opacity-50">16°</span></div>
</div>
<div className="col-2">
        <div className="days">Wed</div>
        <div>🌪️</div>
        <div className="temp1 text-danger">23° <span className="temp2 text-danger text-opacity-50">17°</span></div>
</div>

 </div>
        </div>
    )

}
export default Weather;