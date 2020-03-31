import React from "react";
import "./App.css";
import styled from "styled-components";

const P1 = styled.p`
  color: red;
  font-size: 20px;
  background-color: gray;
  padding: 5px;
  margin: 8x;
`;

const P2 = styled.p`
  color: orange;
  font-size: 20px;
  background-color: gray;
  padding: 5px;
  margin: 8x;
`;

const P3 = styled.p`
  color: yellow;
  font-size: 20px;
  background-color: gray;
  padding: 5px;
  margin: 8x;
`;

const P4 = styled.p`
  color: green;
  font-size: 20px;
  background-color: gray;
  padding: 5px;
  margin: 8x;
`;

const P5 = styled.p`
  color: blue;
  font-size: 20px;
  background-color: gray;
  padding: 5px;
  margin: 8x;
`;

const P6 = styled.p`
  color: purple;
  font-size: 20px;
  background-color: gray;
  padding: 5px;
  margin: 8x;
`;

function Home() {
  return (
    <>
      <h1 className="home-header">
        Just a little something to brighten your day!
      </h1>
      <p className="home-p">
        <P1>
          You are an amazing young woman who has an awesome personality, sense
          of humor, and you are absolutely beautiful.
        </P1>
        <P2>
          You have many great goals set for yourself setting up great
          expectations for your future. Not only are these great goals but they
          also involve helping other humans, just this alone shows me how much
          of a caring person you are.
        </P2>
        <P3>
          You have a positive mindset and will for seeing the future in whatever
          may come.
        </P3>
        <P4>
          You have been through so much in life and can talk openly and show
          others that things will get better.
        </P4>
        <P5>
          Your life experiences wether good or bad have made you the awesome
          person you are today.
        </P5>
        <P6>I cant wait to spend many many days with you!</P6>
      </p>
    </>
  );
}
export default Home;
