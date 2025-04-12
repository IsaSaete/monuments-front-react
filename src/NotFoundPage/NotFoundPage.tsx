import React from "react";
import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found">
      <h2 className="not-found__title">
        OOPS! The page you requested could not be found
      </h2>
      <img
        src="/images/not-found.png"
        alt="Drawing of an angry cat that has chewed the TV cable and on it appears an error 404, not found"
        width={350}
        height={350}
      />
    </div>
  );
};

export default NotFoundPage;
