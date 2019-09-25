import React from 'react';

function Card(props)
{
  const {name,id,email}=props;
  return(
    <div className='tc bg-light-green pa3 ma2 grow shodow-5 dib bw3 br3'>
      <img alt ='robots' src={`https://robohash.org/${id}?200x200`}/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
