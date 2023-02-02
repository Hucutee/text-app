import { style } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@mui/material/styles";
import Gach from "../../pages/images/gach.png";
import data from "../../pages/data/data";
import Group255 from "../../pages/images/Group255.png";
import Traitim from "../../pages/images/traitim.png";
import Cart from "../../pages/images/cart.png";
import Group257 from "../../pages/images/Group257.png";
import Group2571 from "../../pages/images/Group2571.png";
import Cart1 from "../Cart/Cartt";
export default function Create() {

  return (
    <div className={styles.hotdrops}>
        <div className={styles.hotdrops1}>
          <div className={styles.hotdrops2}>
          <Image  src={Group257} alt="" className={styles.gach} />
          <Image  src={Group2571} alt="" className={styles.gach1} />

            
             
          </div>
          <div className={styles.carthotdrops}>
            {data.cart3.map((aa,x) => (
              <Cart1 key={aa.stt} data={aa}/>
             
            ))}
          </div>
        </div>
      </div>
  );
}
