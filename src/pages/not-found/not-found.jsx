import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate("/", {
        replace: true,
      });
      clearTimeout(timerId);
    }, 3000);
  }, [navigate]);

  return (
    <div>
      <h1>Page with url: {location.pathname} is not found</h1>
    </div>
  );
};

export default NotFoundPage;
