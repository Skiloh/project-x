import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Dev from './pages/Developments';
import Sold from './pages/Sold';
import Test from './pages/Testimonials';
import About from './pages/About';

export const Routez = () => {
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path="/buy/rent" element={<Buy />} />
                    <Route path="/dev" element={<Dev />} />
                    <Route path="/sol" element={<Sold />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        );
}