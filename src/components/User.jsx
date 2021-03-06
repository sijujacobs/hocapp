import React from "react";
import RemoteDataLoader from "./RemoteDataLoader";

const User = props => {
  return (
    <div className="user">
      <h3> User Page</h3>
      {props.remoteData &&
        props.remoteData.length > 0 &&
        props.remoteData.map(p => (
          <div key={p.id} className="listItem">
            {p.name.substring(0, 15)}
          </div>
        ))}
    </div>
  );
};

const DataLoadedUser = RemoteDataLoader({ dataType: "users" })(User);
export default DataLoadedUser;
