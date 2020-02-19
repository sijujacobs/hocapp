import React from "react";
import { compose } from "redux";

import RemoteDataLoader from "./RemoteDataLoader";
import LocalDataLoader from "./LocalDataLoader";

const Album = props => {
  console.log("Album :: props : ", props);

  return (
    <div className="album">
      <h3> Album Page</h3>
      {props.remoteData &&
        props.remoteData.length > 0 &&
        props.remoteData.map(p => (
          <div key={p.id} className="listItem">
            {p.title.substring(0, 15)}
          </div>
        ))}
      <h3> Local Data Sections</h3>
      <div className="listItem">{props.localData && props.localData.id}</div>
      <div className="listItem">{props.localData && props.localData.name}</div>
      <div className="listItem">{props.localData && props.localData.date}</div>
    </div>
  );
};

// const DataLoadedAlbum = DataLoader({ dataType: "albums" })(Album);
// export default DataLoadedAlbum;
const composedAlbum = compose(
  RemoteDataLoader({ dataType: "albums" }),
  LocalDataLoader
);
const DataLoadedAlbum = composedAlbum(Album);
export default DataLoadedAlbum;
