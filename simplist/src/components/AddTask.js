import React from 'react';

const AddTask = ({ addedTask }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        addedTask(input.value);
        input.value = '';
      }}>
        +
      </button>

    </div>
  )
}

export default AddTask;
