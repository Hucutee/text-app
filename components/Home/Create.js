import { style } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@mui/material/styles";
import Dot from '../../pages/images/Dot.png';
import hinh1 from "../../pages/images/hinh1.png";
import shirts from "../../pages/images/shirts.jpg";
import plus from "../../pages/images/plus.png";
import Group238 from "../../pages/images/Group238.png";

export default function Create() {

  return (
<div className={styles.bogyhome}>
        <div>
          <div>
            <div className={styles.group238}>
             <Image src={Group238} alt="" className={styles.group238_1}/>
            </div>
            <div className={styles.abinance}>
              A BINANCE SMART CHAIN NFT MARKETPLACE
            </div>
          </div>
          <div className={styles.bogyhome1}>
            <div className={styles.haibenhome}>
              <div className={styles.homebentrai} style={{}}>
                <div className={styles.anhcham} style={{}}>
                  <Image
                    className={styles.imagecham}
                    src={hinh1}
                    alt=""
                    width={385}
                    height={424}
                  />
                                  <Image  src={Dot} alt="" className={styles.divcham} style={{}} />

                </div>
                    
                
              </div>
              <div></div>
            </div>
            <div className={styles.haibenhome}>
              <div className={styles.lehomephai}>
              <div className={styles.home3}>
                <div className={styles.home3_1}>
                  <a>Creator</a>
                  <div>
                    <Image
                      src={shirts} alt=""
                      width={19.5}
                      height={20}
                      className={styles.home3_avt}
                    ></Image>
                    <a style={{ color: "black", paddingTop: "3px" }}>
                      Arkhan17
                    </a>
                  </div>
                </div>
                <div className={styles.home3_2}>
                  <a>Owner</a>
                  <div>
                    <Image
                      src={shirts} alt=""
                      width={19.5}
                      height={20}
                      className={styles.home3_avt}
                    ></Image>
                    <a style={{ color: "black", paddingTop: "3px" }}>
                      Collection
                    </a>
                  </div>
                </div>
                <div className={styles.home3_3}>
                  <a>Collection</a>
                  <div>
                    <Image
                      src={shirts} alt=""
                      width={19.5}
                      height={20}
                      className={styles.home3_avt}
                    ></Image>
                    <a style={{ color: "white", paddingTop: "3px" }}>
                      Arkhan17
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.home4}>Abstr Gradient NFT</div>
              <div className={styles.homee4}>
                <div className={styles.home4_1}>
                  <p className={styles.home4_1_1}>Current Bid</p>
                  <p className={styles.home4_1_2}>0.25 BNB</p>
                  <p className={styles.home4_1_3}>$182.00</p>
                </div>
                <div className={styles.home4_2}>
                  <p className={styles.home4_2_1}>Auction ending in</p>
                  <p className={styles.home4_2_2}>
                    12<a>H</a>43<a>M</a>42<a>S</a>
                  </p>
                </div>
              </div>
              <div className={styles.home5}>
                <div className={styles.home5_1}>Bid Now</div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
