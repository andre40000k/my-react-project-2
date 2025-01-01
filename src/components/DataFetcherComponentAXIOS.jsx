import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetchingAXIOS = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [parameter, setParameter] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${parameter}`);
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [parameter]);

   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Data Fetching AXIOS</h1>
      <label>
        Number:
        <input
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
               const parsedValue = parseInt(e.target.value, 10);
               !isNaN(parsedValue) ? setParameter(parsedValue) : setError("ERROR");
            }
          }}
          placeholder="Enter number"
        />
      </label>
      {data && (
        <div>
          <h2 style={{color: "orange"}}>TITLE: {data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}
      <button onClick={() => setParameter((prev) => prev - 1)}>PREV</button>
      <button onClick={() => setParameter((prev) => prev + 1)}>NEXT</button>
    </div>
  );
};

export default DataFetchingAXIOS;
