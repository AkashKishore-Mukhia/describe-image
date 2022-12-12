import React from 'react'
import UpperContainer from './upper container/upperContainer'
import { useState } from 'react';


export default function GenerateImage() {
  const [data, setData] = useState([]);
  
  // fetches data([of images]) from child component
  const getData = (urls) => {
    setData(urls)
  }

  return (
    <div className='container'>
      <div className='upper-container'>
        <UpperContainer getData={getData}/>
        <div className='img-container'>
          {data.map( (objects) => <div key={data.indexOf(objects)}>
                                  <img src={objects.url}></img>
                                  </div>)}
        </div>
      </div>
    </div>
  )
}
