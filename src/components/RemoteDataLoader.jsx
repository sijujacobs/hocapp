import React from "react";

const RemoteDataLoader = injectedProps => BaseComponent => {
  class HOC extends React.Component {
    state = {
      remoteData: {}
    };

    componentDidMount() {
      console.log(
        "componentDidMount :: BaseComponent  injectedProps : ",
        injectedProps
      );
      this.fetchRemoteData(injectedProps.dataType);
    }

    fetchRemoteData(dataType) {
      try {
        let baseURL = "https://jsonplaceholder.typicode.com/" + dataType;
        fetch(baseURL)
          .then(res => res.json())
          .then(result => {
            var splicedResult = result.splice(0, 10);
            console.log("fetch Result : ", splicedResult);
            this.setState({ remoteData: splicedResult });
          })
          .catch(error => console.log("fetch error : ", error));
      } catch (error) {
        console.log("fetchRemoteData error : ", error);
      }
    }

    render() {
      return (
        <BaseComponent remoteData={this.state.remoteData} {...this.props} />
      );
    }
  }

  return HOC;
};
export default RemoteDataLoader;
