import React from 'react';

function ClothingSize ({ inputs }) {
    let size_a = inputs.size_a;
    let size_b = inputs.size_b;
    let size_c = inputs.size_c; 
    let size;
  
    if (size_a >= 68 && size_a < 90 && size_b >= 62 && size_b <= 76 && size_c >= 60 && size_c <= 69 ) {
      size = 'XS';
    } else if (size_a >= 72 && size_a < 94 && size_b >= 66 && size_b <= 78 && size_c >= 70 && size_c <= 73)  {
      size = 'S';
    } else if (size_a >= 74 && size_a < 90 && size_b >= 68 && size_b <= 80 && size_c >= 72 && size_c <= 75)  {
      size = 'M';
    } else if (size_a >= 78 && size_a < 100 && size_b >= 70 && size_b <= 82 && size_c >= 74 && size_c <= 77)  {
      size = 'L';
    } else if (size_a >= 84 && size_a < 106 && size_b >= 76 && size_b <= 90 && size_c >= 78 && size_c <= 81)  {
      size = 'XL';
    } else if (size_a >= 92 && size_a < 114 && size_b >= 82 && size_b <= 96 && size_c >= 82 && size_c <= 86)  {
      size = 'XXL';
    } else{
        size='size not available';  
    }
  
    return (
      <div>
        <p className='bg-white text-3xl py-10 mb-30 text-transparent bg-clip-text bg-gradient-to-r
         from-pink-500 via-purple-200 to-blue-700"'>{size}</p>
      </div>
    );
  
  }

export default ClothingSize;