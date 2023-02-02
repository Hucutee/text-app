import { style } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import data from "./data/data";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@mui/material/styles";
import Dot from './images/Dot.png';
import plus from "../pages/images/plus.png";
import conchuot from "../pages/images/conchuot.png";
import hinh1 from "../pages/images/hinh1.png";
import shirts from "../pages/images/shirts.jpg";
import gach from "../pages/images/gach.png";
import Group255 from "../pages/images/Group255.png";
import traitim from "../pages/images/traitim.png";
import vecto10 from "../pages/images/vecto10.png";
import vecto9 from "../pages/images/vecto9.png";
import vecto8 from "../pages/images/vecto8.png";
import cart from "../pages/images/cart.png";
import avt from "../pages/images/avt.png";
import Create from "../components/Home/Create.js";
import HotDrops from "../components/Home/HotDrops"
import Top from "../components/Home/Top"
import Discover from "../components/Home/Discover";
import Start from "../components/Home/Start";

const StyledSlider = styled(Slider)(({ theme }) => ({

  ".slick-dots li.slick-active button:before": {
    opacity: .75,
    color: "green",
},
".slick-dots li button:before": {
  fontSize:"12px"
},


}));
export default function Home() {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    appendDots: (dots:any) => (
      <div
        style={{
         
          position: "absolute",bottom:"-60px",left:"-10px"
        }}
      >
        <ul style={{ margin: "0px" ,color:"green"}}> {dots} </ul>
      </div>
    ),
 /*    customPaging: i => (
      <div
        style={{
          
        }}
      ><div className={styles.aaaa} ></div>
       
      </div>
    ), */
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Layout description={"aaa"}>
      <Create/>
      <HotDrops/>
      <Top/>
      <Discover/>
      <Start/>
    </Layout>
  );
}
