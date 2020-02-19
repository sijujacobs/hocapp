import React from "react";

const LocalDataLoader = BaseComponent => {
  class HOC extends React.Component {
    state = {
      localData: {
        id: "0",
        name: "",
        date: ""
      }
    };

    componentDidMount() {
      console.log("LocalDataLoader ::  componentDidMount   injectedProps : ");
      this.fetchLocalData();
    }

    fetchLocalData() {
      try {
        // const localDataKey = "lDataKey"
        // const localData = localStorage.getItem(localDataKey);
        // localStorage.setItem(localDataKey, (localData)|| this.state.localData);
        this.setState({
          localData: {
            id: "1",
            name: "localStorageData",
            date: "02-22-2020"
          }
        });
      } catch (error) {
        console.log("fetchLocalData error : ", error);
      }
    }

    render() {
      return <BaseComponent localData={this.state.localData} {...this.props} />;
    }
  }

  return HOC;
};
export default LocalDataLoader;
