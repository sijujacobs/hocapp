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
            // const localDataKey = "lDataKey"
            // const localData = localStorage.getItem(localDataKey); 
            // localStorage.setItem(localDataKey, (localData)|| this.state.localData);

            this.fetchRemoteData(injectedProps.dataType);
        }

        fetchRemoteData(dataType){
            try{
                let baseURL = "https://jsonplaceholder.typicode.com/" + dataType;
                fetch(baseURL)
                .then(res => res.json())
                .then(result => {
                    console.log("fetch Result : ", result);
                    this.setState({ remoteData: result })
                })
                .catch(error => console.log("fetch error : ", error));
            }catch(error){
                console.log("fetchRemoteData error : ", error)
            }
        }

        render(){
            return(<BaseComponent localData={this.state.localData} />)
        }
    }

    return HOC;
}
export default DataLoader;