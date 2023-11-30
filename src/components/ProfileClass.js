import React from "react";

class Profile extends React.Component {
constructor(props){
    super(props);
    console.log(`${this.props.childType} constructor`);
    this.state = {
        userInfo : {
          login : "dummay name",
          location : "dummy location",
          avatarUrl : ""
        }
    }
}

async componentDidMount(){
  console.log(`${this.props.childType} componentDidMount`)
  const data = await fetch("https://api.github.com/users/Pramod-naik47");
  const json = await data.json();
  console.log(json);
  this.setState ({
    userInfo : json
  })

  this.timer = setInterval(() => {
    console.log("OP");
  }, 1000);
 
}

componentDidUpdate(){
  console.log("did update");
}

componentWillUnmount(){
  console.log("component will unmout");
  clearInterval(this.timer)
}

  render() {
    const { count } = this.state;
    console.log(`${this.props.childType} render`);
    return (
      <>
        <h3>Profile class component</h3>
        <img src={this.state.userInfo.avatar_url}/>
        <h3>Name : {this.state.userInfo.login} </h3>
        <h3>Location : {this.state.userInfo.location} </h3>
       
        <hr/>
      </>
    );
  }
}
export default Profile;
