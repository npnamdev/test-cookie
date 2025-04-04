import React, { useState, useEffect } from 'react';

const CallApi = () => {
  const [response, setResponse] = useState('');
  const [cookie, setCookie] = useState('');

  // Kiểm tra cookie khi trang được load lại
  useEffect(() => {
    const currentCookie = document.cookie;
    if (currentCookie) {
      setCookie(currentCookie); // Nếu có cookie, hiển thị cookie
    } else {
      setCookie('Chưa có cookie'); // Nếu không có cookie, hiển thị thông báo này
    }
  }, []);

  const callApi = async () => {
    try {
      const response = await fetch("https://api.wedly.info/api/set-cookie", {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      setResponse(JSON.stringify(data, null, 2));

      // Sau khi gọi API và set cookie, kiểm tra lại và cập nhật trạng thái cookie
      const currentCookie = document.cookie;
      setCookie(currentCookie);
      console.log("Cookie set:", document.cookie);
    } catch (error) {
      console.error("Error calling API:", error);
      setResponse("Error calling API!");
    }
  };

  const handleDeleteCookie = () => {
    // Xóa cookie (trong trường hợp bạn muốn xóa cookie và hiển thị lại "Chưa có cookie")
    document.cookie = "cookieName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    setCookie('Chưa có cookie');
  };

  return (
    <div>
      <h2>Call API and Set Cookie</h2>
      <button onClick={callApi}>Call API</button>
      <button onClick={handleDeleteCookie}>Delete Cookie</button>
      <p>Cookie: {cookie}</p>
      <p>Response: {response}</p>
    </div>
  );
};

export default CallApi;
