import React from "react";
import RemoteDataLoader from "./RemoteDataLoader";

const Photo = props => {
  console.log("Photo :: props : ", props);
  return (
    <div className="photo">
      <h3> Photo Page</h3>
      {props.remoteData &&
        props.remoteData.length > 0 &&
        props.remoteData.map(p => (
          <div key={p.id} className="listItem">
            {p.title.substring(0, 15)}
          </div>
        ))}
    </div>
  );
};

const DataLoadedPhoto = RemoteDataLoader({ dataType: "photos" })(Photo);
export default DataLoadedPhoto;
