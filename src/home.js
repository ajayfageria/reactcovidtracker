import React from 'react';
import { useEffect,useState } from 'react';
import './home.css'
function Home() {
    const [data, setData]=useState([]);
    const getCovidData = async () => {
        const response = await fetch("https://api.covid19india.org/data.json");

        const finalData = await response.json();
       setData(finalData.statewise[0]);
    }
    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
           <div style={{textAlign:"center"}}>
            <h1>  🔴 Live </h1>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>
            </div>
            <div>
            <div className="flex-container">
                <div style={{background: "#ff9933"}} >
                    <div className="card_inner">
                        <p className="card_name"><small>OUR </small>Country</p>
                        <p className="card_total card_small">INDIA</p>
                    </div>

                </div>
                <div style={{background: "#54ce63eb"}}>
                    <div className="card_inner">
                        <p className="card_name"><small>TOTAL </small>RECOVERED</p>
                        <p className="card_total card_small">{data.recovered}</p>
                    </div>

                </div>
                <div style={{background: "#4dc3ff"}}>
                    <div className="card_inner">
                        <p className="card_name"><small>TOTAL </small>CONFIRMED</p>
                        <p className="card_total card_small">{data.confirmed}</p>
                    </div>

                </div>


            </div>
           
            <div className="flex-container">


                <div style={{background: "#ea1d0e"}}>
                    <div className="card_inner">
                        <p className="card_name"><small>TOTAL </small>DEATH</p>
                        <p className="card_total card_small">{data.deaths}</p>
                    </div>

                </div>
                <div style={{background: "#ff6666"}}>
                    <div className="card_inner">
                        <p className="card_name"><small>TOTAL </small>ACTIVE</p>
                        <p className="card_total card_small">{data.active}</p>
                    </div>

                </div>
                <div style={{background: "#00cccc"}}>
                    <div className="card_inner">
                        <p className="card_name"><small>LAST </small>UPDATED</p>
                        <p className="card_total card_small">{data.lastupdatedtime}</p>
                    </div>

                </div>
            </div>
            </div>
            <div style={{textAlign:"center",marginTop:"50px"}}>
           
            <h2>Developed By-- Ajay Kumar</h2>
            </div>
  
        </>
    )

}
export default Home;