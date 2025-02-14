import React from "react";

const CompanyCard = ({ imageUrl, name, registrationNo, address, email }) => {
  return (
    <div className="w-80 h-96 mx-auto overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all border border-gray-200">
      <div className="w-full h-48">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={`${name} office`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="space-y-2 text-sm text-gray-400">
          <div className="flex items-center">
            <span className="mr-2">#</span>
            <span>{registrationNo}</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2">📍</span>
            <span>{address}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">✉️</span>
            <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
              {email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
