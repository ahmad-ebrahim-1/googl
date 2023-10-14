import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { useResultContext } from "../context/ResultContextProvider";
import Links from "./Links";

const Search = () => {
  const [text, setText] = useState("Elon Musk");
  const { setSearchTerm } = useResultContext();
  /*
      The useDebounce hook helps in delaying the execution-
      of the search functionality until the user has finished-
      typing or there is a period of inactivity in typing,-
      preventing excessive and unnecessary search requests.
  */
  const [debouncedValue] = useDebounce(text, 500);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="sm:w-96 w-full h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none
      p-6 text-black hover:shadow-lg"
        placeholder="Search Googl or type URL"
      />
      {text && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500"
          onClick={() => setText("")}
        >
          x
        </button>
      )}
      <Links />
    </div>
  );
};

export default Search;
