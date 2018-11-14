import React from "react";
import RestList from "../Components/RestList";
import Loading from "../Components/Loading";
import PageControls from "../Components/PageControls";

const RestFinder = ({
  loadedRest,
  loadRest,
  isLoading,
  restList,
  resetRest
}) => {
  return (
    <div className="rest-finder-container">
      <h1 className="main-title">Find resteraunts</h1>
      {!loadedRest ? (
        <div className="find-rest-button" onClick={loadRest}>
          Find Resteraunts Near You
        </div>
      ) : (
        <>
          <RestList restList={restList} />
          <div onClick={resetRest} className="change-page">
            Go Back
          </div>
        </>
      )}
      {isLoading && <Loading />}
      <PageControls />
    </div>
  );
};

export default RestFinder;
