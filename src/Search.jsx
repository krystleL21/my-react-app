import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';





export default function Search() {
    return (
<div>
<form>
    <div>
    <input type="search" placeholder="Enter a city..." className="search me-2 mt-4"/>
    <button type="submit" className="submit ms-2 rounded">Search</button>
    </div>
</form>


</div>


    )
}