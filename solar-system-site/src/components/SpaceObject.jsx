import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function SpaceObject() {
  const { id } = useParams();

  const [obj, setObj] = useState([]);

  useEffect(() => {
    fetch(`https://api.le-systeme-solaire.net/rest/bodies/${ id }`)
      .then(response => response.json())
      .then(data => {
        setObj(data);
      });
    }, []);

    if(obj.length !== 0) {
      return(
            <div id={obj.name}>
            <p>Name: {obj.name}</p>
            <p>{obj.englishName}</p>
            <p>Type: {obj.bodyType}</p>
            </div>)
    }else{
      return(
        <div>Loading</div>
      )
    }
}
