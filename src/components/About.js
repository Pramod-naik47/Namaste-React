import React from "react";
import ProfileFunctionalComponent from "./Profile";
import ProfileClassComponent from "./ProfileClass";
import UserContext from "../utils/userContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
    
  }
  componentDidMount() {
   
    console.log(" ParentComponent did mount");
  }

  render() {
    console.log("Parent render");
    return (
      <>
        <h1>About us</h1>
        <ProfileClassComponent
          childType="Class - First child"
          name={"Sam"}
          type={"Class component"}
        />
        <UserContext.Consumer>
          {({user}) => <h1>{user.name}</h1>}
        </UserContext.Consumer>
        <h1></h1>
      </>
    );
  }
}

export default About;
