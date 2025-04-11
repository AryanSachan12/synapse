import React, { useState } from "react";
import axios from "../../config/AxiosConfig";

const Analysis = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.size > 50 * 1024 * 1024) {
      setError("File size exceeds 50MB limit.");
      setFile(null);
    } else {
      setError("");
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a valid report to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/report/upload-pdf/", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" },
      });

      if (response.ok) {
        const result = await response.json();

        // Extract actual JSON from the string
        let extractedData;
        try {
          extractedData = JSON.parse(result.summary.replace(/```json\n|\n```/g, ""));
        } catch (error) {
          console.error("Error parsing summary:", error);
          extractedData = { summary: "Error parsing summary." };
        }

        setData(extractedData);
      } else {
        alert("Failed to upload report.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("An error occurred while uploading.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center bg-[#5F6FFF] text-white my-12 p-12 rounded-lg shadow-2xl w-3/4 mx-auto">
      <h1 className="text-3xl font-bold mb-4">Medical Report Analysis</h1>
      <p className="text-sm text-center mb-6 w-3/4">
        Upload your medical reports to get an in-depth analysis and insights to assist in your treatment.
      </p>

      <div className="flex flex-col items-center gap-4 w-full max-w-md">
        <input
          type="file"
          onChange={handleFileChange}
          className="text-black bg-white rounded-lg py-2 px-6 cursor-pointer hover:text-white hover:bg-[#7e82a9] transition-all w-full text-center"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          onClick={handleUpload}
          disabled={loading}
          className={`text-black bg-white rounded-lg py-2 px-6 cursor-pointer transition-all w-full ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:text-white hover:bg-[#767a9e]"
          }`}
        >
          {loading ? "Uploading..." : "Upload & Analyze →"}
        </button>
      </div>

      {/* Show Analysis Summary */}
      {data && (
        <div className="mt-8 p-6 bg-white text-black rounded-lg shadow-lg w-full max-w-2xl transition-all">
          <h2 className="text-xl font-semibold mb-4">Analysis Summary</h2>
          <p className="text-gray-700 text-sm mb-4">{data.summary}</p>

          {/* Symptoms List */}
          <h3 className="text-lg font-semibold mt-4">Symptoms</h3>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {data.symptoms?.map((symptom, index) => (
              <li key={index}>{symptom}</li>
            ))}
          </ul>

          {/* Diseases List */}
          <h3 className="text-lg font-semibold mt-4">Diseases</h3>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {data.diseases?.map((disease, index) => (
              <li key={index}>{disease}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Analysis;
