import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();

const baseUrl = "https://google-web-search1.p.rapidapi.com";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("JS Mastery");

  const getResults = async (query) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${query}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c06cc69c3cmsh64cc8162f926815p16e06fjsn1c3324e05ada",
        "X-RapidAPI-Host": "google-web-search1.p.rapidapi.com",
      },
    });

    const data = await response.json();

    setResults(data);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ results, isLoading, searchTerm, setSearchTerm, getResults }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
