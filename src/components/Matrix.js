import React from "react";
// import App.css

const Matrix = () => {

    const updateMatrix = (name) => {
        console.log(this);
      };

  return (
    <table border="1" className='matrix'>
  <thead>
    <tr>
      <th id='col1' onClick={this.updateMatrix} className='matrix-col'></th>
      <th  className='matrix-col'></th>
      <th  className='matrix-col'></th>
      <th  className='matrix-col'></th>
    </tr>
    <tr>
      <th  className='matrix-col'></th>
      <th  className='matrix-col'></th>
      <th  className='matrix-col'></th>
      <th  className='matrix-col'></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='matrix-col'>
      </td>
      <td className='matrix-col'>
      </td>
      <td className='matrix-col'>
      </td>
      <td className='matrix-col'>
      </td>
    </tr>
  </tbody>
</table>
  )
}

export default Matrix