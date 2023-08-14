import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((oData) => {
        // console.log(oData);
        setData(oData);
      })
      .catch((error) => {});
  }, [url]);

  return data;
};

export default useFetch;
