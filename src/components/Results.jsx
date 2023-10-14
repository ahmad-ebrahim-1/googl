import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useResultContext } from "../context/ResultContextProvider";
import Loading from "./Loading";
import Alert from "./Alert";

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    getResults(`/?query=${searchTerm}&limit=20`);
  }, [searchTerm]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      if (results?.results === undefined) {
        return (
          <Alert>
            ☹️ Sorry, we seem to be having some problems. Please try again later
          </Alert>
        );
      } else {
        return (
          <div className="flex flex-wrap justify-between gap-2.5 space-y-6 sm:px-28">
            {results?.results?.map((res, index) => (
              <div key={index} className="lg:w-2/5 w-full">
                <a href={res.url} target="_blank" rel="noreferrer">
                  <p className="text-sm">
                    {res.url.length > 30 ? res.url.substring(0, 30) : res.url}
                  </p>
                  <p className="text-xl hover:underline dark:text-blue-300 text-blue-700">
                    {res.title}
                  </p>
                  <p className="text-sm mt-1 opacity-75">{res.description}</p>
                </a>
              </div>
            ))}
          </div>
        );
      }
    default:
      return (
        <Alert>☹️ Unfortunately, this data is currently not available</Alert>
      );
  }
};

export default Results;
