
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import '../LandingPage/LandingPage.css';

const LandingPage = () => {

    const navigate = useNavigate();

    return (
        <div style={{ height: 'fit-content' }}>
            <div className='body'>
                <div className='background-wrapper'>
                    <div className='circle'></div>
                    <div className='mittlinje'></div>
                    <div className='penalty-area'>
                        <div className='half-circle'></div>
                        <div className='goal-area'></div>
                    </div>
                </div>

                <div className='wrapper'>
                    <div className='page-content'>
                        <div className='content-box'>
                            <h1>Intiutiv planering för ditt lag</h1>
                            <h1> i Allsvenskan Fantasy</h1>
                            <p className='sub-text'>Välkommen till din personliga assistent för Allsvenskan fantasy - det ultimata verktyget för att dominera din liga! Skrota excel-ark och anteckningar, här finns värdefull statistik och insikter för att hjälpa dig köra över dina vänner!</p>
                            <button className='purple-button pointer underline' onClick={() => navigate("/login")}>Logga in</button>
                        </div>
                        <div className="display-app-preview">
                            <img src={require('./app-preview.png')} alt="your image" />
                        </div>
                    </div>
                    <div className='page-content space-around row-reverse'>
                        <div className='content-box' style={{ width: 'auto' }}>
                            <h2>Se detaljerat spelschema</h2>
                            {/* TEMPTEXT */}
                            <p className='sub-text'>Välkommen till din personliga assistent för Fantasy Allsvenskan - den ultimata verktyget för att dominera din liga! Här finns värdefull statistik och insikter för att hjälpa dig köra över dina vänner! </p>
                            <p className='sub-text'>Välkommen till din personliga assistent för Fantasy Allsvenskan - den ultimata verktyget för att dominera din liga! Här finns värdefull statistik och insikter för att hjälpa dig köra över dina vänner! </p>
                        </div>
                        <div className='content-box' style={{ width: 'auto' }}>
                            <div className="display-app-preview-small"></div>
                        </div>
                    </div>
                    <div className='page-content space-around'>
                        <div className='content-box' style={{ width: 'auto' }}>
                            <h2>Planera kommande omgångar</h2>
                            {/* TEMPTEXT */}
                            <p className='sub-text'>Välkommen till din personliga assistent för Fantasy Allsvenskan - den ultimata verktyget för att dominera din liga! Här finns värdefull statistik och insikter för att hjälpa dig köra över dina vänner! </p>
                            <p className='sub-text'>Välkommen till din personliga assistent för Fantasy Allsvenskan - den ultimata verktyget för att dominera din liga! Här finns värdefull statistik och insikter för att hjälpa dig köra över dina vänner! </p>
                        </div>
                        <div className='content-box' style={{ width: 'auto' }}>
                            <div className="display-app-preview-small"></div>
                        </div>
                    </div>
                </div>
                <div className='content-grid'></div>
            </div>
        </div >
    )
}

export default LandingPage