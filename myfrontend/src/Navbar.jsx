import './Navbar.css';
import company from './company.jpg';
export default function Navbar() {
    return (<nav className="nav">
        <a href="/" className="logo"> <img src={company} alt='logo' style={{ width: '60px', height: '60px'}}/> </a>
        <ul>
        <li className='active'><a href="/home"> Home</a></li> 
        <li><a href="/buy/rent">Buy/Rent</a></li>
        <li><a href="/dev">Developments</a></li>
        <li><a href="/sol">Sold</a></li>
        <li><a href="/test">Testimonials</a></li>
        <li><a href="/about">About</a></li>
        </ul>
        </nav>);
}
