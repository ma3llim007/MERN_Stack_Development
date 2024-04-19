import React, { useState } from 'react'
import XmlCard from './XmlCard';

const XMLHTTP = () => {
  const [data, setData] = useState(null);
  const handleClick = () => {
    const xml = new XMLHttpRequest();
    xml.open('GET', 'https://dummyjson.com/recipes');
    xml.onload = function () {
      if (xml.status === 200) {
        let FetchData = JSON.parse(xml.responseText);
        setData(FetchData);
      }
    };
    xml.send();
  }
  return (
    <>
      <button className='btn btn-primary m-4' onClick={handleClick}>Get Data</button>
      <div className="container">
        <div className="row">
          {data ? <XmlCard data={data}></XmlCard> : <div>Data Is Not Available ...</div>}
        </div>
      </div>
    </>
  )
}

export default XMLHTTP;
