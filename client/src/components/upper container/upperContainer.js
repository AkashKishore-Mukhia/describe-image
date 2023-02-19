import './upperContainer.css'
import { useState } from 'react';
import React from 'react'


function UpperContainer({getData}) {
  const [wait, setWait] = useState('')
  const [form, setForm] = useState({
    description: '',
    size: '',
    imageQuantity: 1,
  })

  // hadle function for submit
  async function handleSubmit(e) {
    e.preventDefault();
    setWait('please wait...')

    const response = await fetch('https://http://localhost:3000/openai/createImage', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form)
    })
    
    const res = await response.json();
    getData(res.imageurl);
    setWait('');
  }

  // handles the input changes and set changes into form variable
  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value});
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Describe Image</h1>
        <input placeholder='Please describe image' type={'text'} name="description" value={form.description} className='description-input-box' onChange={handleChange} required></input><br />
        <select className='select' name='size' value={form.size} onChange={handleChange}>
          <option value={'small'}>small</option>
          <option value={'medium'}>medium</option>
          <option value={'large'}>large</option>
        </select><br/>
        <input type="range" name="imageQuantity" min="1" max="5" value={form.imageQuantity} onChange={handleChange}></input>
        <button type='submit' className='btn-generate'>Generate</button>
        <h4>{wait}</h4>
      </form>
    </div>
  )
}

export default UpperContainer;


