import React from "react";
import UserContext from "../utilis/UserContext";

// This is how to create class based component unlike functional component

class Userclass extends React.Component {
  // this is how to get props in class based
  constructor(props) {
    super(props);

    //How to create a state variable in class based ones
    this.state = {
      userInfo: {
        name: "dummy",
        location: "null",
        bio: "ntg much",
      },
    };
  }

  async componentDidMount() {
    //api calls
    const data = await fetch(" https://api.github.com/users/BobbyDra13");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, bio, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h1>Name:{name}</h1>
        {/* this is how to make calls for react context in class based components */}
        <UserContext.Consumer>
          {(data) => <h1 className="font-bold">{data.loggedInUser}</h1>}
        </UserContext.Consumer>
        <h3>Location:{location}</h3>
        <h3>Bio:{bio} </h3>
      </div>
    );
  }
}

export default Userclass;
