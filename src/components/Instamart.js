import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div style={{ border: "1px solid black", padding: "4px", margin: "4px" }}>
      <h3>{title}</h3>
      {isVisible ? (
        <>
          <button
            style={{ cursor: "pointer" }}
            onClick={() => {
              setIsVisible();
            }}
          >
            Hide
          </button>
          <p>{description}</p>
        </>
      ) : (
        <>
          <button
            style={{ cursor: "pointer" }}
            onClick={() => {
              setIsVisible();
            }}
          >
            Show
          </button>
        </>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState();
  return (
    <>
      <h1 style={{ font: "bold", textAlign: "center" }}>Insta mart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection == "about"}
        setIsVisible={() => {setVisibleSection("about")}}
      />
      <Section
        title={"About Instamart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection == "team"}
        setIsVisible={() => {setVisibleSection("team")}}
      />
      <Section
        title={"About Instamart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection == "profile"}
        setIsVisible={() => {setVisibleSection("profile")}}
      />
    </>
  );
};

export default Instamart;
