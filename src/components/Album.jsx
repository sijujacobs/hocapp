import React from 'react';
import DataLoader from './DataLoader';

const Album = (props) => {
    console.log('Album :: props : ', props);
    
    return(<div className="album" >
        <h3> Album Page</h3>
        {
            (props.remoteData && props.remoteData.length > 0) && 
            props.remoteData.map( p => <div key={p.id} className="listItem">{p.title.substring(0, 15)}</div> )
        }
    </div>);
}

const DataLoadedAlbum = DataLoader({dataType: 'albums'})(Album);
export default DataLoadedAlbum;
