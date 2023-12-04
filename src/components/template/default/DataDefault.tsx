import { useEffect, useState } from 'react';

function DataDefault() {

  const URL = 'https://www.hook-oficial.com/';

  const [htmlData, setHtmlData] = useState('');

  useEffect(() => {
    fetchDataHtml();
  }, []);

  const fetchDataHtml = async () => {

    try {
      const response = await fetch(URL);
      if (!response.ok) { throw new Error(`HTTP error! Status: ${response.status}`); }
      const data = await response.text();
      setHtmlData(data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }

  };

  const htmlString = JSON.stringify(htmlData);

  localStorage.setItem('default-template', htmlString);

  console.log(localStorage.getItem('default-template'))

  return (
    <>
    </>
  );

}

export default DataDefault;