import { useState } from "react";

const Country = ({contry, handleVisitedCountry}) => {
    console.log(contry)
    const {name, coatOfArms, area, cca3} = contry;
    const [visited, setvisited] = useState(false);
    const handleVisited = () =>{
        setvisited(!visited)
    }
    console.log(handleVisitedCountry)
    return (
        <>
        <div className={`card shadow-xl h-4/5 ${visited? 'visited': 'non-visited'}`}>
        <figure><img src={coatOfArms.png}/></figure>
        <div className=" text-center">
            <h2 className="card-title">{name.common}</h2>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button className="btn btn-primary">Mark Visited</button><br /><br />
            <div className="card-actions justify-center flex-col items-center">
            <button onClick={handleVisited} className="btn btn-primary">Visited</button>
            {/* {visited && 'I have visited this country'} */}
            {visited ? 'I have visited this country' : ''}
            </div>
        </div>
        </div>
        </>
    );
};

export default Country;