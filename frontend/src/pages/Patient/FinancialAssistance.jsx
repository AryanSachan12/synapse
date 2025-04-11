import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import axios from "../../config/AxiosConfig";

const schemes = [
  // Income Range: 0-1L
  {
    title: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
    description: "Provides free health insurance coverage for secondary and tertiary care hospitalization.",
    amount: "₹5,00,000",
    applicableIncomeRange: "0-1L",
  },
  {
    title: "Rashtriya Swasthya Bima Yojana (RSBY)",
    description: "Provides health insurance coverage for BPL (Below Poverty Line) households.",
    amount: "₹30,000",
    applicableIncomeRange: "0-1L",
  },
  {
    title: "Mukhyamantri Amrutum Yojana (Gujarat)",
    description: "Covers critical illness treatment expenses for BPL families.",
    amount: "₹3,00,000",
    applicableIncomeRange: "0-1L",
  },

  // Income Range: 1-3L
  {
    title: "Mahatma Jyotirao Phule Jan Arogya Yojana (MJPJAY)",
    description: "Offers health insurance for low-income families in Maharashtra.",
    amount: "₹1,50,000",
    applicableIncomeRange: "1-3L",
  },
  {
    title: "Chief Minister’s Comprehensive Health Insurance Scheme (Tamil Nadu)",
    description: "Provides free medical treatment to families earning under ₹1.2 lakh per year.",
    amount: "₹5,00,000",
    applicableIncomeRange: "1-3L",
  },
  {
    title: "Biju Swasthya Kalyan Yojana (Odisha)",
    description: "Covers hospitalization expenses for economically weaker families.",
    amount: "₹5,00,000",
    applicableIncomeRange: "1-3L",
  },
  {
    title: "Rajiv Aarogyasri Scheme (Andhra Pradesh)",
    description: "Offers cashless treatment for various serious diseases.",
    amount: "₹2,00,000",
    applicableIncomeRange: "1-3L",
  },

  // Income Range: 3-5L
  {
    title: "Dr. YSR Aarogyasri Health Scheme",
    description: "Provides financial assistance for critical health conditions.",
    amount: "₹5,00,000",
    applicableIncomeRange: "3-5L",
  },
  {
    title: "Karunya Arogya Suraksha Padhathi (Kerala)",
    description: "Covers hospitalization for economically weaker sections.",
    amount: "₹5,00,000",
    applicableIncomeRange: "3-5L",
  },
  {
    title: "Mahatma Jyotiba Phule Jan Arogya Yojana (MJPJAY)",
    description: "Health insurance coverage for specific critical illnesses.",
    amount: "₹1,50,000",
    applicableIncomeRange: "3-5L",
  },

  // Income Range: 5-10L
  {
    title: "West Bengal Swasthya Sathi Scheme",
    description: "Universal health insurance covering hospitalization expenses.",
    amount: "₹5,00,000",
    applicableIncomeRange: "5-10L",
  },
  {
    title: "Arogya Karnataka",
    description: "Covers 30% of treatment costs for middle-income families.",
    amount: "Varies (30% of total cost)",
    applicableIncomeRange: "5-10L",
  },
  {
    title: "Mukhyamantri Chiranjeevi Swasthya Bima Yojana (Rajasthan)",
    description: "Provides free health insurance to middle-income families.",
    amount: "₹10,00,000",
    applicableIncomeRange: "5-10L",
  },

  // Income Range: 10-20L
  {
    title: "ESIC Health Insurance Scheme",
    description: "Covers full medical care for employees with income under ₹21,000 per month.",
    amount: "Full Coverage",
    applicableIncomeRange: "10-20L",
  },
  {
    title: "CGHS (Central Government Health Scheme)",
    description: "Medical services for central government employees and pensioners.",
    amount: "Varies based on treatment",
    applicableIncomeRange: "10-20L",
  },
  {
    title: "Railway Employees Health Scheme",
    description: "Covers railway employees and pensioners with cashless treatment options.",
    amount: "Full Coverage",
    applicableIncomeRange: "10-20L",
  },

  // Income Range: 20L+
  {
    title: "CGHS (Central Government Health Scheme)",
    description: "Provides full healthcare benefits to government employees and pensioners.",
    amount: "Varies based on treatment",
    applicableIncomeRange: "20L+",
  },
  {
    title: "Ex-Servicemen Contributory Health Scheme (ECHS)",
    description: "Healthcare benefits for retired armed forces personnel and their families.",
    amount: "Full Coverage",
    applicableIncomeRange: "20L+",
  },
  {
    title: "Private Corporate Health Insurance Plans",
    description: "Many corporates offer health insurance covering hospitalization and OPD.",
    amount: "Varies based on employer plan",
    applicableIncomeRange: "20L+",
  },
];

const FinancialAssistance = () => {
  const { user, isAuthenticated } = useAuth0();
  const [currUser, setCurrUser] = useState(null);

  useEffect(() => {
    const fetchPatientDetails = async () => {
      if (isAuthenticated && user) {
        try {
          const res = await axios.get(`/patient/getPatient/${user.email}`);
          setCurrUser(res.data);
        } catch (error) {
          console.error("Error fetching patient details:", error);
        }
      }
    };

    fetchPatientDetails();
  }, [user, isAuthenticated]);

  // Filter schemes based on user's income
  const getApplicableSchemes = () => {
    if (!currUser || !currUser.income) return [];
    return schemes.filter((scheme) => scheme.applicableIncomeRange === currUser.income);
  };

  const applicableSchemes = getApplicableSchemes();

  return (
    <div className="my-12 p-8 bg-[#5F6FFF] text-white rounded-lg shadow-2xl">
      <h1 className="text-3xl font-bold text-center mb-6">
        Government Financial Assistance Schemes
      </h1>
      <p className="text-center text-sm w-3/4 mx-auto mb-8">
        Explore various government schemes designed to provide financial aid to individuals and families in need.
      </p>

      {applicableSchemes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {applicableSchemes.map((scheme, index) => (
            <div key={index} className="bg-white text-black p-6 rounded-lg shadow-lg hover:cursor-pointer hover:shadow-2xl">
              <h2 className="text-xl font-semibold mb-2">{scheme.title}</h2>
              <p className="text-sm text-gray-600">{scheme.description}</p>
              <p className="text-lg font-semibold mt-2">Assistance: {scheme.amount}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg font-semibold">No applicable schemes found for your income range.</p>
      )}
    </div>
  );
};

export default FinancialAssistance;
