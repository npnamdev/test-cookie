import React, { useState } from 'react';

const CallApi = () => {
  const [response, setResponse] = useState('');

  const callApi = async () => {
    try {
      const response = await fetch("https://api-irc2.onrender.com/api/set-cookie", {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      setResponse(JSON.stringify(data, null, 2));
      console.log("Cookie set:", document.cookie);
    } catch (error) {
      console.error("Error calling API:", error);
      setResponse("Error calling API!");
    }
  };

  return (
    <div>
      <h2>Call API and Set Cookie</h2>
      <button onClick={callApi}>Call API</button>
      <p>{response}</p>
    </div>
  );
};

export default CallApi;
