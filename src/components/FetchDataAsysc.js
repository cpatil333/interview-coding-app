import React, { useEffect, useState } from "react";

const FetchDataAsysc = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  });
  const getData = async () => {
    try {
      //   await fetch(
      //     "https://jsonplaceholder.typicode.com/users")
      //     .then((response) => response.json())
      //     .then(data => setData(data));
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log("Something went wrong!");
    }
  };

  return (
    <div>
      <h2>Fetch Data Async</h2>
      <ul>
        {data.length > 0 &&
          data.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
};

export default FetchDataAsysc;
