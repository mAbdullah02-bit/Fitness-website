import React from 'react';

const ImageCard = ({ title, subtitle, image, link }) => {
  return (
    <div className="relative group overflow-hidden w-full h-[300px]">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-8">
        <h2 className="text-xl font-bold text-center">{title}</h2>
        <p className="mt-2 text-sm text-center">{subtitle}</p>
        <a
          href={link}
          className="mt-4 px-4 py-2 bg-white text-black rounded-md transition-colors duration-300 hover:bg-black hover:text-white"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default ImageCard;
