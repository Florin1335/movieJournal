import React, { useEffect, useState } from "react";
import useApiCall from "../../apiHooks/useApiCall.js";

export default function MovieButton({ imdbID, buttonName }) {
  const [info, setInfo] = useState(null);
  const [actionType, setActionType] = useState(null);
  const [data, isLoading] = useApiCall(
    `/api/${buttonName}/get/${imdbID}`,
    "GET",
    true
  );
  const [addData, addLoading, setClickedAdd] = useApiCall(
    `/api/${buttonName}/add/${imdbID}`,
    "GET",
    true,
    null,
    true
  );

  const [removeData, removeLoading, setClickedRemove] = useApiCall(
    `/api/${buttonName}/remove/${imdbID}`,
    "DELETE",
    true,
    null,
    true
  );

  useEffect(() => {
    if (data && !addData && !removeData) setInfo(data.payload);
    else if (data && addData && actionType === "add") setInfo(addData.payload);
    else if (data && removeData && actionType === "remove")
      setInfo(removeData.payload);
  }, [data, addData, removeData]);

  return (
    <div className="col-12 col-md-6 d-flex flex-column justify-content-between mb-3 mb-md-0">
      <button
        className="w-50 mx-auto btn btn-light"
        disabled={addLoading || isLoading || removeLoading ? true : false}
        onClick={() => {
          if (
            (data && data.type === "success" && !actionType) ||
            (actionType && actionType === "add")
          ) {
            setClickedRemove(true);
            setActionType("remove");
          } else {
            setClickedAdd(true);
            setActionType("add");
          }
        }}
      >
        {(data && data.type === "success" && !actionType) ||
        (actionType && actionType === "add")
          ? "Remove from " + buttonName
          : "Add to " + buttonName}
      </button>
      {info && <p className="text-center mt-2 mt-md-4">{info}</p>}
    </div>
  );
}
