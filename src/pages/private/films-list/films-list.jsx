import axios from "axios";
import React, { useEffect, useState } from "react";

const FilmsListPage = () => {
  const [data, setData] = useState([]);

  const getFilmsData = async () => {
    try {
      const data = await axios.get("/titles");

      setData(data.data.results);
    } finally {
    }
  };

  useEffect(() => {
    getFilmsData();
  }, []);

  console.log({ data });

  return (
    <div>
      <h1>Hello from routes</h1>

      {data.length
        ? data.map((el) => {
            return (
              <div key={el.id}>
                <h2>{el?.originalTitleText?.text}</h2>

                <img
                  src={el?.primaryImage?.url}
                  alt={el?.primaryImage?.caption?.plainText}
                />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default FilmsListPage;
