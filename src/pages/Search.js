import React from 'react';
import Select from 'react-select';

function Search({createdAt}) {
    console.log(createdAt,"createdat");
  return (
    <div className="App">
      <Select
        options={createdAt}
      />
    </div>
  );
}

export default Search;