import React from 'react';

function SearchBox({searchchange})
{
  return(
    <div className='pa2'>
      <input
        className='bg-lightest-blue pa3 ba b--green'
        type='search'
        placeholder='search robots'
        onChange={searchchange}
      />
    </div>
  );
}
export default SearchBox;
