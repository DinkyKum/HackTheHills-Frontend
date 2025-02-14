import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import axios from "axios";

const AdminDashboard = () => {
  const [companies, setCompanies] = useState([]);

  const fetchCompany = async () => {
    try {
      const res = await axios.get("http://localhost:3000/viewCompany", {
        withCredentials: true,
      },
    );
      console.log("API Response:", res.data);
      setCompanies(res.data);
    } catch (error) {
      console.error("Error fetching companies:", error.response?.data || error.message);
    }
  };
  

  useEffect(() => {
    fetchCompany();
  }, []);

  return (
    <main className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Featured Companies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.length > 0 ? (
          companies.map((company, index) => (
            <CompanyCard
              key={index}
              imageUrl={company.photoUrl} 
              name={company.name}
              registrationNo={company.registrationNumber}
              address={company.address}
              email={company.emailId} 
            />
          ))
        ) : (
          <p className="text-center col-span-3">No companies found.</p>
        )}
      </div>
    </main>
  );
};

export default AdminDashboard;
