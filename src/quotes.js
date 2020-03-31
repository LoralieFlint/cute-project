import React from "react";
import "./App.css";
import styled from "styled-components";

const Holder = styled.div`
    border: 5px solid black;
    border-radius: 30px;
    background-color: #7953A9;
    margin: 30px;
`;

const Lyrics = styled.h3`
  font-size: 30px;
  background-color: #7953A9;
  padding: 5px;
  margin: 10px;
`;

const Artist = styled.p`
  font-size: 20px;
  padding: 5px;
  margin: 10px;
  font-family: cursive;
`;

const Refresh = styled.button`
border: 1px solid black;
border-radius: 5px;
  font-size: 20px;
  padding: 5px;
  background-color: #663399;
  `;

function Quotes() {
    let quote;
    let band;
    let randomNum;

   let quotes = ["If I smile and don't believe Soon I know I'll wake from this dream Don't try to fix me I'm not broken", 
   "I want to stay in love with my sorrow, oh, but God I want to let it go", 
   "Now here I go again, I see the crystal visions I keep my visions to myself, it's only me", 
   "All your life you've never seen A woman taken by the wind Would you stay if she promised you heaven?",
    "Don't hide yourself in regret Just love yourself and you're set I'm on the right track, baby I was born this way",
    "I can't believe how you slurred at me With your half wired broken jaw You popped my heart seams",
    "Fully alive More than most, ready to smile, and love life Fully alive and she knows How to believe in futures",
    "Do you believe in God Written on the bullet Say yes or pull the trigger",
    "Cause you live in shades of cool Your heart is unbreakable",
    "They judge me like a picture book By the colors, like they forgot to read"
]

    let bands = ["Evanescence", 
    "Evanescence", 
    "Fleetwood Mac", 
    "Fleetwood Mac", 
    "Lady Gaga", 
    "Lady Gaga", 
    "Flyleaf", 
    "Flyleaf", 
    "Lana Del Rey", 
    "Lana Del Rey"]

randomNum = Math.floor((Math.random()*quotes.length))
quote = quotes[randomNum]
band = bands[randomNum]

function refreshPage() {
  window.location.reload(false);
}

return (
    <>
    <Holder>
    <Lyrics>{quote}
    <Artist>{band}</Artist>
    </Lyrics>
    </Holder>
    <Refresh className="refresh" type="submit" onClick={refreshPage}>New Quote</Refresh>
    </>
)
}

export default Quotes