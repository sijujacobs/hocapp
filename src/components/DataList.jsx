import React from 'react';
import DataLoader from './DataLoader';

const DataList = (props) => {

    console.log("DataList props : ", props)
  
    return(<div className="dataList" >
        <h3> Localstorage Data</h3>
        <p> ID : {props.localData.id}</p>
        <p> Name: {props.localData.name}</p>
        <p> Data: {props.localData.date}</p>
        
    </div>);
}

const LoadedComponent = DataLoader({dataType: 'users'})(DataList);
export default LoadedComponent;

