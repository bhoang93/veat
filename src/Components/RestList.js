import React from "react";

const RestList = ({ restList }) => {
  return (
    <div className="rest-list-container">
      {restList.map(rest => {
        return (
          <div className="resteraunt" key={rest.uri}>
            <h2 className="resteraunt__header">{rest.name}</h2>
            <p className="resteraunt__desc">{rest.short_description}</p>

            <p className="resteraunt__info">
              <span className="resteraunt__info--header">Address</span>
              <br />
              <span className="resteraunt__info--content">
                {rest.address1}
                <br />
                {rest.postal_code}
              </span>
            </p>

            <p className="resteraunt__info">
              <span className="resteraunt__info--header">Distance: </span>
              <span className="resteraunt__info--content">
                {rest.distance.toFixed(2)} miles away
              </span>
            </p>

            <p className="resteraunt__info">
              <span className="resteraunt__info--header">Pricing: </span>
              <span className="resteraunt__info--content">
                {rest.price_range.split(" ")[2]}
              </span>
            </p>

            {rest.phone && (
              <p className="resteraunt__info">
                <span className="resteraunt__info--header">Phone: </span>
                <span className="resteraunt__info--content">{rest.phone}</span>
              </p>
            )}
            {rest.website && (
              <div className="resteraunt__info--website">
                <a href={rest.website} target="_blank">
                  Website
                </a>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RestList;
