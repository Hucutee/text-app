import { style } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import data from "../../pages/data/data";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gach from "../../pages/images/gach.png";
import Group255 from "../../pages/images/Group255.png";
import traitim from "../../pages/images/traitim.png";
import vecto10 from "../../pages/images/vecto10.png";
import vecto9 from "../../pages/images/vecto9.png";
import vecto8 from "../../pages/images/vecto8.png";
import cart from "../../pages/images/cart.png";
import Group123 from "../../pages/images/Group123.png";
import Cartt from "../Cart/Cartt";


export default function Discover() {

 
  return (
<div className={styles.discover}>
        <div>
          <div className={styles.discover1}>
            <div className={styles.discover2}>
              <Image src={Group123} className={styles.discovermore} alt=""/>
          
            </div>
          </div>
          <div>
            <div className={styles.category}>
              <div className={styles.category1}>All Categories</div>
              <div className={styles.category2}>Art</div>
              <div className={styles.category2}>Celebrities</div>
              <div className={styles.category2}>Music</div>
              <div className={styles.category2}>Photography</div>
              <div className={styles.category2}>Sports</div>
              <div className={styles.category2}>Trading Cards</div>
              <div className={styles.category2}>Utility</div>
              <div className={styles.category2}>Virtual Worlds</div>
            </div>
            <div className={styles.filter}>
              <div>
                <Image
                  src={vecto8} alt=""
                  width={24}
                  height={16}
                  style={{ marginRight: "10px" }}
                ></Image>{" "}
                Filters{" "}
              </div>
            </div>
          </div>
          <div className={styles.cart20}>
            {data.cart12.map((aa,x) => (
              <Cartt key={aa.stt} data={aa}/>
             
            ))}
          </div>
          <div className={styles.morenft}>
            <div className={styles.morenft1}>More NFT&apos;s</div>
          </div>
        </div>
      </div>
  );
}
