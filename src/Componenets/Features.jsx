import React from 'react'
import { featureData } from '../utils/features';

const FeatureCard = ({ image, title, description }) => {
  return (
    
    <div className="card bg-base-100 w-[220px] shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt={title}
          className="rounded-full w-[120px] h-[120px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};


const Features = () => {

  return (
    <div>
      <h1 className='text-4xl font-bold flex justify-center mb-5 mt-10'>Our Features</h1>
    <div className="flex flex-wrap justify-center gap-6">

      {featureData.map((feature, index) => (
        <FeatureCard 
          key={index}
          image={feature.image}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
    </div>
  );
};


export default Features