import React from 'react';

const DataLoader = injectedProps =>(BaseComponent) => {
    class HOC extends React.Component{
        state = {
            localData : {
                id      : "1",
                name    : "localStorageData",
                date    : "02-22-2020"
            },
            remoteData :{
            }
        }

        componentDidMount(){
            console.log(' componentDidMount :: BaseComponent  injectedProps : ',  injectedProps)
            this.fetchRemoteData(injectedProps.dataType);
                // const localDataKey = "lDataKey"
                // const localData = localStorage.getItem(localDataKey); 
                // localStorage.setItem(localDataKey, (localData)|| this.state.localData);
        }

        fetchRemoteData(dataType){
            try{
                let baseURL = "https://jsonplaceholder.typicode.com/" + dataType;
                fetch(baseURL)
                .then(res => res.json())
                .then(result => {
                    var splicedResult = result.splice(0, 10);
                    console.log("fetch Result : ", splicedResult);
                    this.setState({ remoteData:  splicedResult});
                })
                .catch(error => console.log("fetch error : ", error));
            }catch(error){
                console.log("fetchRemoteData error : ", error)
            }
        }

        render(){
            return(<BaseComponent localData={this.state.localData} remoteData={this.state.remoteData} />)
        }
    }

    return HOC;
}
export default DataLoader;