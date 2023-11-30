import { useEffect } from "react";

const Profile = ({ name, type, childType }) => {

  useEffect(() => {
    console.log(`${childType} - useEffect`);
  })

  console.log(`${childType} - render`);
  return (
    <>
      <h3>Profile</h3>
      <h5>Name : {name} </h5>
      <h6>Component type : {type} </h6>
      <hr/>
    </>
  );
};

export default Profile;
