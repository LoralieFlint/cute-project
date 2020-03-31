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
    "They judge me like a picture book By the colors, like they forgot to read",
    "It's only forever, not long at all...",
    "It's further than you think. Time is short.",
    "You have no power over me...",
    "I move the stars for no one...",
    "When your thing gets wild, chilly down, chilly down!",
    "Just fear me, love me, do as I say and I will be your slave.",
    "There's a light in the darkness, of everybody's life.",
    "Cause I've seen blue skies, through the tears in my eyes.",
    "I would like, if I may, to take you on a strange journey.",
    "I see you shiver with antici",
    "It's not easy having a good time. Even Smiling makes my face ache.",
    "Don't dream it. Be it.",
    "Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.",
    "Everything I have I owe to this job…this stupid, wonderful, boring, amazing job.",
    "The Dunder Mifflin stock symbol is D.M.I. Do you know what that stands for? Dummies, Morons, and Idiots. Because that’s what you’d have to be to own it. And as one of those idiots, I believe the board owes me answers.",
    "I wanna do a cartwheel. But real casual like. Not enough to make a big deal out of it, but I know everyone saw it. One stunning, gorgeous cartwheel.",
    "I’m not superstitious, but I am a little stitious.",
    "I got six numbers, one more and it would have been a complete phone number.",
    "Just remember, every time you look up at the moon, I, too, will be looking at a moon. Not the same moon, obviously, That's impossible.",  
    "Sometimes you gotta work a little so you can ball a lot.",
    "Boss man, I wanna go home early. Ooh, hold on actually, hang on. Yeah, no, I wanna quit and never come here again.",
    "No matter what I do, literally nothing bad can happen to me. I'm like a white, male US Senator.",
    "Treat yo self.",
    "We need to remember what's important in life. Friends, waffles, and work. Or waffles, friends, work. It doesn't matter. But work is third.",
    "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
    "It does not do well to dwell on dreams and forget to live.",
    "Fear of a name only increases fear of the thing itself.",
    "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
    "It matters not what someone is born, but what they grow to be.",
    "We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.",
    "Dark and difficult times lie ahead. Soon we must all face the choice between what is right and what is easy.",
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
    "Lana Del Rey",
    "The Labyrinth",
    "The Labyrinth",
    "The Labyrinth",
    "The Labyrinth",
    "The Labyrinth",
    "The Labyrinth",
    "Rocky Horror Picture Show",
    "Rocky Horror Picture Show",
    "Rocky Horror Picture Show",
    "Rocky Horror Picture Show",
    "Rocky Horror Picture Show",
    "Rocky Horror Picture Show",
    "The Office",
    "The Office",
    "The Office",
    "The Office",
    "The Office",
    "The Office",
    "Parks and Recreation",
    "Parks and Recreation",
    "Parks and Recreation",
    "Parks and Recreation",
    "Parks and Recreation",
    "Parks and Recreation",
    "Harry Potter",
    "Harry Potter",
    "Harry Potter",
    "Harry Potter",
    "Harry Potter",
    "Harry Potter",
    "Harry Potter",
  ]

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