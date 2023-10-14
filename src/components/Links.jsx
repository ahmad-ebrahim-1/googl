import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "🌍 All" },
  { url: "/news", text: "📰 News" },
  { url: "/images", text: "📷 Images" },
  { url: "/videos", text: "📺 Videos" },
];

const Links = () => {
  return (
    <div className="flex flex-wrap sm:justify-around justify-between items-center max-sm:gap-3 gap-8 mt-4">
      {links.map(({ url, text }) => (
        <NavLink
          key={text}
          to={url}
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
              : ""
          }
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
