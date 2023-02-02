import { style } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import data from "../../pages/data/data";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import conchuot from "../../pages/images/conchuot.png";
import Ellip from "../../pages/images/Ellip.png";

export default function Start() {

  return (
    <div className={styles.conchuot}>
    <div className={styles.conchuottext}>
      <div>
        <div className={styles.conchuottext1}>
          Become a wizard with the <br />
          Coco NFT Academy
        </div>
        <div className={styles.conchuottext2}>
          Head over to our NFT Academy to learn all about NFTs. Our team is
          contantly developing new articles and videos to help you better
          understand how to create, collect, sell, showcase your digital
          assets.
        </div>
      </div>
      <div className={styles.conchuotbutton}>Start Learning</div>

      <Image src={conchuot} alt="" className={styles.imgconchuot} />
      <Image src={Ellip} alt="" className={styles.imgellip} />

    </div>
  </div>
  );
}
