import { useState, useEffect } from "react";

export default function Cards() {

  const [Planet, setPlanet] = useState([]);
  // fetch("https://api.le-systeme-solaire.net/rest/bodies/mars")
  useEffect(() => {
    fetch("https://api.le-systeme-solaire.net/rest/bodies/")
      .then(response => response.json())
      .then(data => {
        setPlanet(data.bodies);
      });
    }, []);
    console.log(Planet);

    if(Planet.length !== 0) {
      return(
        Planet.map(planet => (
            <div className="card" id={planet}>
            <p>Name: {planet.name}</p>
            <p>{planet.englishName}</p>
            <p>Type: {planet.bodyType}</p>
            </div>)
        ))
    }else{
      return(
        <div>Loading</div>
      )
    }
}
