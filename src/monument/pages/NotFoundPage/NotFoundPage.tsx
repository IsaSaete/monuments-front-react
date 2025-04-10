import React from "react";
import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className="image-containt">
      <img
        src="/error404.webp"
        alt="Drawing of an angry cat that has chewed the TV cable and on it appears an error 404, not found"
        width={990}
        height={560}
      />
    </div>
  );
};

export default NotFoundPage;
