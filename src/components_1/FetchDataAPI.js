import React, { useEffect, useState } from "react";

const FetchDataAPI = () => {
  const [userData, setUsetData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });
    const data = await response.json();
    if (data) {
      setUsetData(data);
      setLoading(false)
    } else {
      console.log("Something went wrong");
    }
  };
  if(loading) return <p>loading....</p>
  return (
    <div>
      <h2>Fetch Data</h2>
      <br />
      <ul>
        {userData.length > 0 &&
          userData.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
};

export default FetchDataAPI;
