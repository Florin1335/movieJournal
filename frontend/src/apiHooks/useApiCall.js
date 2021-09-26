import { useEffect, useState } from "react";

const useApiCall = (
  url,
  method = "GET",
  token = false,
  payload = null,
  onClick = false
) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [clicked, setClicked] = useState(onClick ? false : null);

  useEffect(() => {
    const request = () => {
      setIsLoading(true);
      setData(null);
      let headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      if (token && localStorage.getItem("auth-token"))
        headers = {
          ...headers,
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("auth-token")
          )}`,
        };
      let options = {
        method: method,
        headers,
      };
      if (payload) options = { ...options, body: JSON.stringify(payload) };
      fetch(url, options)
        .then((value) => {
          if (!value.ok) throw value;
          return value.json();
        })
        .then((value) => {
          setData({ type: "success", payload: value });
          setIsLoading(false);
        })
        .catch((err) => {
          try {
            err.json().then((value) => {
              setData({ type: "failure", payload: value });
              setIsLoading(false);
            });
          } catch (error) {
            setData({
              type: "failure",
              payload: "Internet connection problem.",
            });
            setIsLoading(false);
          }
        });
    };
    if (clicked === null) {
      request();
    } else {
      if (clicked === true) {
        request();
        setClicked(false);
      }
    }
  }, [clicked]);

  return [data, isLoading, setClicked];
};

export default useApiCall;
