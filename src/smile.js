import React from "react";
import "./App.css";
import styled from "styled-components";
import bunny from "./img/baby-bunny.jpg"
import dolphinOne from "./img/baby-dolphin-1.jpg"
import dolphinTwo from "./img/baby-dolphin-2.jpeg"
import dolphinThree from "./img/baby-dolphin-3.jpg"
import elaOne from "./img/baby-ele-1.jpeg"
import elaTwo from "./img/baby-ela-2.jpeg"
import ferretOne from "./img/baby-ferret-1.jpg"
import ferretTwo from "./img/baby-ferret-2.jpeg"
import ferretThree from "./img/baby-ferret-3.jpg"
import foxOne from "./img/baby-fox-1.jpg"
import foxTwo from "./img/baby-fox-2.jpg"
import foxThree from "./img/baby-fox-3.jpeg"
import giraffe from"./img/baby-giraffe.jpeg"
import orca from"./img/baby-orca.jpeg"
import otterOne from"./img/baby-otter.jpg"
import otterTwo from"./img/baby-otter-2.jpeg"
import otterThree from"./img/baby-otter-3.jpg"
import panda from"./img/baby-panda.jpg"
import tigerW from"./img/baby-white-tiger.jpg"
import tiger from"./img/baby-tiger.jpg"
import kittenOne from"./img/kitten-1.jpg"
import kittenTwo from"./img/kitten-2.jpg"
import kittenThree from"./img/kitten-3.jpg"
import pony from"./img/pony-1.jpg"
import puppyOne from"./img/puppy-1.jpeg"
import puppyTwo from"./img/puppy-2.jpg"
import puppyThree from"./img/puppy-3.jpg"
import wolfOne from "./img/puppy-wolf-1.jpg";
import wolfTwo from"./img/puppy-wolf-2.jpeg";
import wolfThree from"./img/puppy-wolf-3.jpg";

const Pics = styled.img`
  height: 250px;
  width: 250px;
  border: 5px solid black;
  border-radius: 25px;
  display: block;
  margin: 0 auto;
  margin-top: 15px;
`;

const Refresh = styled.button`
border: 1px solid black;
border-radius: 5px;
font-size: 20px;
padding: 5px;
background-color: #663399;
margin-top: 10px;
`;

function Smile () {
    let randomPic;
    let imgs;

    let images = [
    wolfOne, wolfTwo, wolfThree, puppyThree, puppyTwo, puppyOne, pony, kittenOne, kittenTwo, kittenThree, tigerW, tiger, panda, otterOne, otterTwo, otterThree, orca, giraffe, foxOne, foxTwo, foxThree, ferretOne, ferretTwo, ferretThree, dolphinOne, dolphinTwo, dolphinThree, bunny, elaOne, elaTwo];
        
    randomPic = Math.floor((Math.random()*images.length))
    imgs = images[randomPic]

    function refreshPage() {
        window.location.reload(false);
      }
    

      return (
          <div>
                <Pics src={imgs} ></Pics>
                <Refresh className="refresh" type="submit" onClick={refreshPage}>New Picture</Refresh>
          </div>
      )
}
export default Smile








