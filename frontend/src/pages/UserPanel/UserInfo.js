import React from "react";
import useApiCall from "../../apiHooks/useApiCall";
import Loading from "../../components/Loading";

export default function UserInfo() {
  const [data, isLoading] = useApiCall("/api/infos", "GET", true);

  return (
    <div>
      {isLoading && <Loading></Loading>}
      {data && data.type === "failure" && (
        <h3 className="text-danger text-center p-4">{data.payload}</h3>
      )}
      {data && data.type === "success" && (
        <div className="row g-0">
          <div className="col-12 col-sm-4 d-flex align-items-center">
            <img className="img-fluid" alt="user" src="/images/user.svg"></img>
          </div>
          <div className="col-12 col-sm-8 p-2 p-md-3 p-xl-4 d-flex flex-column justify-content-between">
            <div>
              <h1 className="text-capitalize mb-4 mb-sm-3 text-center text-sm-start">
                {data.payload.name}
              </h1>
              <span className="d-flex flex-row align-items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.7rem"
                  height="1.7rem"
                  fill="currentColor"
                  className="bi bi-envelope me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                </svg>
                <h3>{data.payload.email}</h3>
              </span>
              <span className="d-flex flex-row align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.7rem"
                  height="1.7rem"
                  fill="currentColor"
                  className="bi bi-clock me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                </svg>
                <h4>Account was created on {data.payload.date}</h4>
              </span>
            </div>
            <div>
              <span className="d-flex flex-row align-items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.7rem"
                  height="1.7rem"
                  fill="currentColor"
                  className="bi bi-card-list me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                  <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                </svg>
                <h3>Wishlist count: {data.payload.wishlistCount}</h3>
              </span>
              <span className="d-flex flex-row align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.7rem"
                  height="1.7rem"
                  fill="currentColor"
                  className="bi bi-card-checklist me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                  <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                </svg>
                <h3>History count: {data.payload.historyCount}</h3>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
