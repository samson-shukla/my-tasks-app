import React from "react";

export const About = () => {
  let aboutStyle = {
    minHeight: "85vh",
    width: "87%",
    textAlign: "justify",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  let cursorStyle = {
    cursor: "pointer",
    color: "blue",
  };
  const handleClick = () => {
    window.open("https://github.com/samson-shukla/MyTasks-App");
  };

  return (
    <div className="container" style={aboutStyle}>
      <p>
        <h3 className="my-5">About this Project</h3>
        <h6>Hey There!</h6>
        After working some time with HTML, CSS and Vanilla JavaScript I am
        finally starting to learn ReactJs. This is just a basic Tasks / Todo app
        built with ReactJs. Mostly it is a YouTube Tutorial follow up but I am
        adding a little bit of styling and 1-2 extra functionality of my own.
        <br />
        <br />
        Check out the code on{" "}
        <em onClick={handleClick} style={cursorStyle}>
          Github
        </em>
      </p>
    </div>
  );
};
