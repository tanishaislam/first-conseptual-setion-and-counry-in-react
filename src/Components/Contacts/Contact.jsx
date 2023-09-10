import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Country.css'
const Contact = () => {
    const [contet, setContet] = useState([])
    const [visitedCountrys, setVisitedCountries] = useState([])
    const handleVisitedCountry = country => {
        console.log(country)
    }
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setContet(data))
    },[])
    return (
        <div>
            <h2>All Countries: {contet.length}</h2>
            <div>
                <h3>Visited Countries</h3>
                <ul>
                    
                </ul>
            </div>
            <div className='Country-container mx-auto container'>
                {
                    contet.map(con => <Country key={con.cca3} contry = {con} handleVisitedCountry = {handleVisitedCountry}></Country>)
                }
            </div>
        </div>
    );
};

export default Contact;