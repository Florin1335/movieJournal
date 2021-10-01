import React from "react";
import useApiCall from "../../apiHooks/useApiCall";
import Loading from "../../components/Loading";
import MovieCard from "./MovieCard";

export default function UserHistory() {
  const [data, isLoading] = useApiCall("/api/history", "GET", true);

  return (
    <div className="container p-3">
      <h1 className="text-center mb-4">History</h1>
      {isLoading && <Loading></Loading>}
      {data && data.type === "failure" && (
        <h3 className="text-danger text-center p-4">{data.payload}</h3>
      )}
      {data && data.type === "success" && (
        <div className="row justify-content-center">
          {Object.keys(data.payload).length === 0 ? (
            <h3 className="text-center">No movies saved in the history.</h3>
          ) : (
            Object.keys(data.payload).map((value, index) => (
              <MovieCard
                imdbID={value}
                date={data.payload[value]}
                key={index}
              ></MovieCard>
            ))
          )}
        </div>
      )}
    </div>
  );
}
