import React from 'react';

export const Target = ({ redes }) => {
  return (
    <div>
      {redes.map((red, index) => (
        <div key={index} className='bg-zinc-800 w-full flex justify-center items-center py-2 px-20 rounded-lg
        transition-all duration-300 cursor-pointer mb-2 text-white hover:bg-lime-400 hover:text-black'>
          <a href={red.link} target='_blank' className='no-underline text-xl font-medium'>
            {red.titulo}
          </a>
        </div>
      ))}
    </div>
  );
};
