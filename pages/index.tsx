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
    appendDots: dots => (
      <div
        style={{
         
          positon: "absolute",bottom:"-60px",left:"-10px"
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
    <Layout>
      <div className={styles.bogyhome}>
        <div>
          <div>
            <div className={styles.group238}>
              CREATE{" "}
              <Image
                src="/images/plus.png"
                className={styles.imageplus}
                alt=""
                width={66}
                height={65}
              />{" "}
              COLLECT
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
                    src="/images/hinh1.png"
                    alt=""
                    width={385}
                    height={424}
                  />
                </div>
                <div className={styles.divcham} style={{}}>
                    <div><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/></div>
                    <div><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/></div>
                    <div><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/></div>
                    <div><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/></div>
                    <div><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/></div>
                    <div><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/></div>
                    <div><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/></div>
                    <div><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/><Image className={styles.cham} src="/images/Ellipse 5.png" alt="" width={7.8} height={7.8}/></div>
               </div>
              </div>
              <div></div>
            </div>
            <div className={styles.haibenhome}>
              <div className={styles.home3}>
                <div className={styles.home3_1}>
                  <a>Creator</a>
                  <div>
                    <Image
                      src="/images/shirts.jpg"
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
                      src="/images/shirts.jpg"
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
                      src="/images/shirts.jpg"
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
      <div className={styles.hotdrops}>
        <div className={styles.hotdrops1}>
          <div className={styles.hotdrops2}>
            <div className={styles.hot}>HOT</div>
            <div>
              <div className={styles.drops}>DROPS</div>
              <div>
                <img src="/images/gach.png" className={styles.gach} />
              </div>
            </div>
          </div>
          <div className={styles.carthotdrops}>
            {data.cart3.map((aa) => (
              <div className={styles.carthotdrops1}>
                <div>
                  <img src={aa.image} className={styles.imagecart} />
                </div>
                <div className={styles.cartname}>{aa.name}</div>
                <div className={styles.cartname1}>{aa.name1}</div>
                <div className={styles.bnb}>
                  <div>
                    <Image
                      src="/images/Vector (4).png"
                      width={12.29}
                      height={8.41}
                      style={{ marginLeft: "4px" }}
                    ></Image>
                    <div style={{ marginTop: "-15px" }}>
                      <Image
                        src="/images/Vector (5).png"
                        width={4.6}
                        height={4.6}
                        style={{ marginRight: "3.19px" }}
                      ></Image>
                      <Image
                        src="/images/Vector (5).png"
                        width={4.6}
                        height={4.6}
                        style={{ marginRight: "3.19px" }}
                      ></Image>
                      <Image
                        src="/images/Vector (5).png"
                        width={4.6}
                        height={4.6}
                        style={{ marginRight: "3.19px" }}
                      ></Image>
                    </div>
                    <div style={{ marginLeft: "4px", marginTop: "-10px" }}>
                      <Image
                        src="/images/Vector (6).png"
                        width={12.29}
                        height={8.41}
                      ></Image>
                    </div>
                  </div>
                  <div className={styles.bnb1}>{aa.bnb} BNB</div>
                </div>
                <div className={styles.cuoicart}>
                  <div className={styles.omauxam}>{aa.gio}</div>
                  <div className={styles.omauxanh}>Bid Now</div>
                  <div>
                    {" "}
                    <Image
                      src="/images/Vector (7).png"
                      width={27}
                      height={24}
                      style={{ marginLeft: "23px" }}
                    ></Image>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.top}>
        <StyledSlider {...settings} className={styles.top1}>
          <div className={styles.top2}>
            <div className={styles.top3}>
              <div className={styles.top3_1}>Top Collections </div>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  marginBottom: "38px",
                }}
                className={styles.top3_2}
              >
                Last 7 days{" "}
                <Image
                  src="/images/Vector (10).png"
                  width={9.33}
                  height={5.33}
                  style={{ marginLeft: "10px", marginTop: "9px" }}
                ></Image>
              </div>
            </div>
            {data.nguoi.map((aa) => (
              <div className={styles.top4}>
                <div className={styles.top4_1}>{aa.stt}</div>
                <div style={{ position: "relative" }} className={styles.top4_2}>
                  <img src={aa.avt} />
                  {aa.stt == 1 ? (
                    <Image
                      src="/images/Vector (9).png"
                      width={26.67}
                      height={26.67}
                      style={{
                        position: "absolute",
                        right: "-5px",
                        top: "-5px",
                      }}
                    ></Image>
                  ) : (
                    false
                  )}
                </div>
                <div className={styles.top4_3}>
                  <div className={styles.top4_3_1}>{aa.ten}</div>
                  <div className={styles.top4_3_2}>
                    <div>
                      <div style={{ position: "relative" }}>
                        <Image
                          src="/images/Vector (4).png"
                          width={12.29}
                          height={8.41}
                          style={{ marginLeft: "4px" }}
                        ></Image>
                      </div>
                      <div style={{ marginTop: "-15px" }}>
                        <Image
                          src="/images/Vector (5).png"
                          width={4.6}
                          height={4.6}
                          style={{ marginRight: "3.19px" }}
                        ></Image>
                        <Image
                          src="/images/Vector (5).png"
                          width={4.6}
                          height={4.6}
                          style={{ marginRight: "3.19px" }}
                        ></Image>
                        <Image
                          src="/images/Vector (5).png"
                          width={4.6}
                          height={4.6}
                          style={{ marginRight: "3.19px" }}
                        ></Image>
                      </div>
                      <div style={{ marginLeft: "4px", marginTop: "-10px" }}>
                        <Image
                          src="/images/Vector (6).png"
                          width={12.29}
                          height={8.41}
                        ></Image>
                      </div>
                    </div>
                    <div className={styles.top4_3_2_1}>{aa.tien}</div>
                  </div>
                </div>
                {aa.phantram.slice(0, 1) == "-" ? (
                  <div className={styles.top4_4_4}>{aa.phantram}</div>
                ) : (
                  <div className={styles.top4_4}>{aa.phantram}</div>
                )}
              </div>
            ))}
          </div>
          <div className={styles.top2}>
            <div className={styles.top3}>
              <div className={styles.top3_1}>Top Sellers </div>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  marginBottom: "38px",
                }}
                className={styles.top3_2}
              >
                Last 7 days{" "}
                <Image
                  src="/images/Vector (10).png"
                  width={9.33}
                  height={5.33}
                  style={{ marginLeft: "10px", marginTop: "9px" }}
                ></Image>
              </div>
            </div>
            {data.nguoi.map((aa) => (
              <div className={styles.top4}>
                <div className={styles.top4_1}>{aa.stt}</div>
                <div style={{ position: "relative" }} className={styles.top4_2}>
                  <img src={aa.avt} />
                  {aa.stt == 1 ? (
                    <Image
                      src="/images/Vector (9).png"
                      width={26.67}
                      height={26.67}
                      style={{
                        position: "absolute",
                        right: "-5px",
                        top: "-5px",
                      }}
                    ></Image>
                  ) : (
                    false
                  )}
                </div>
                <div className={styles.top4_3}>
                  <div className={styles.top4_3_1}>{aa.ten}</div>
                  <div className={styles.top4_3_2}>
                    <div>
                      <div style={{ position: "relative" }}>
                        <Image
                          src="/images/Vector (4).png"
                          width={12.29}
                          height={8.41}
                          style={{ marginLeft: "4px" }}
                        ></Image>
                      </div>
                      <div style={{ marginTop: "-15px" }}>
                        <Image
                          src="/images/Vector (5).png"
                          width={4.6}
                          height={4.6}
                          style={{ marginRight: "3.19px" }}
                        ></Image>
                        <Image
                          src="/images/Vector (5).png"
                          width={4.6}
                          height={4.6}
                          style={{ marginRight: "3.19px" }}
                        ></Image>
                        <Image
                          src="/images/Vector (5).png"
                          width={4.6}
                          height={4.6}
                          style={{ marginRight: "3.19px" }}
                        ></Image>
                      </div>
                      <div style={{ marginLeft: "4px", marginTop: "-10px" }}>
                        <Image
                          src="/images/Vector (6).png"
                          width={12.29}
                          height={8.41}
                        ></Image>
                      </div>
                    </div>
                    <div className={styles.top4_3_2_1}>{aa.tien}</div>
                  </div>
                </div>
                {aa.phantram.slice(0, 1) == "-" ? (
                  <div className={styles.top4_4_4}>{aa.phantram}</div>
                ) : (
                  <div className={styles.top4_4}>{aa.phantram}</div>
                )}
              </div>
            ))}
          </div>
          <div className={styles.top2}>
            <div className={styles.top3}>
              <div className={styles.top3_1}>Top Buyers </div>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  marginBottom: "38px",
                }}
                className={styles.top3_2}
              >
                Last 7 days{" "}
                <Image
                  src="/images/Vector (10).png"
                  width={9.33}
                  height={5.33}
                  style={{ marginLeft: "10px", marginTop: "9px" }}
                ></Image>
              </div>
            </div>
            {data.nguoi.map((aa) => (
              <div className={styles.top4}>
                <div className={styles.top4_1}>{aa.stt}</div>
                <div style={{ position: "relative" }} className={styles.top4_2}>
                  <img src={aa.avt} />
                  {aa.stt == 1 ? (
                    <Image
                      src="/images/Vector (9).png"
                      width={26.67}
                      height={26.67}
                      style={{
                        position: "absolute",
                        right: "-5px",
                        top: "-5px",
                      }}
                    ></Image>
                  ) : (
                    false
                  )}
                </div>
                <div className={styles.top4_3}>
                  <div className={styles.top4_3_1}>{aa.ten}</div>
                  <div className={styles.top4_3_2}>
                    <div>
                      <div style={{ position: "relative" }}>
                        <Image
                          src="/images/Vector (4).png"
                          width={12.29}
                          height={8.41}
                          style={{ marginLeft: "4px" }}
                        ></Image>
                      </div>
                      <div style={{ marginTop: "-15px" }}>
                        <Image
                          src="/images/Vector (5).png"
                          width={4.6}
                          height={4.6}
                          style={{ marginRight: "3.19px" }}
                        ></Image>
                        <Image
                          src="/images/Vector (5).png"
                          width={4.6}
                          height={4.6}
                          style={{ marginRight: "3.19px" }}
                        ></Image>
                        <Image
                          src="/images/Vector (5).png"
                          width={4.6}
                          height={4.6}
                          style={{ marginRight: "3.19px" }}
                        ></Image>
                      </div>
                      <div style={{ marginLeft: "4px", marginTop: "-10px" }}>
                        <Image
                          src="/images/Vector (6).png"
                          width={12.29}
                          height={8.41}
                        ></Image>
                      </div>
                    </div>
                    <div className={styles.top4_3_2_1}>{aa.tien}</div>
                  </div>
                </div>
                {aa.phantram.slice(0, 1) == "-" ? (
                  <div className={styles.top4_4_4}>{aa.phantram}</div>
                ) : (
                  <div className={styles.top4_4}>{aa.phantram}</div>
                )}
              </div>
            ))}
          </div>
        </StyledSlider>
      </div>
      <div className={styles.discover}>
        <div>
          <div className={styles.discover1}>
            <div className={styles.discover2}>
              <div className={styles.discovertext}>DISCOVER</div>
              <div>
                <div className={styles.moretext}>MORE</div>
                <div>
                  <img src="/images/gach.png" className={styles.gachdiscover} />
                </div>
              </div>
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
                  src="/images/Vector (8).png"
                  width={24}
                  height={16}
                  style={{ marginRight: "10px" }}
                ></Image>{" "}
                Filters{" "}
              </div>
            </div>
          </div>
          <div className={styles.cart20}>
            {data.cart12.map((aa) => (
              <div className={styles.carthotdrops1_1}>
                <div>
                  <img src={aa.image} className={styles.imagecart} />
                </div>
                <div className={styles.cartname}>{aa.name}</div>
                <div className={styles.cartname1}>{aa.name1}</div>
                <div className={styles.bnb}>
                  <div>
                    <Image
                      src="/images/Vector (4).png"
                      width={12.29}
                      height={8.41}
                      style={{ marginLeft: "4px" }}
                    ></Image>
                    <div style={{ marginTop: "-15px" }}>
                      <Image
                        src="/images/Vector (5).png"
                        width={4.6}
                        height={4.6}
                        style={{ marginRight: "3.19px" }}
                      ></Image>
                      <Image
                        src="/images/Vector (5).png"
                        width={4.6}
                        height={4.6}
                        style={{ marginRight: "3.19px" }}
                      ></Image>
                      <Image
                        src="/images/Vector (5).png"
                        width={4.6}
                        height={4.6}
                        style={{ marginRight: "3.19px" }}
                      ></Image>
                    </div>
                    <div style={{ marginLeft: "4px", marginTop: "-10px" }}>
                      <Image
                        src="/images/Vector (6).png"
                        width={12.29}
                        height={8.41}
                      ></Image>
                    </div>
                  </div>
                  <div className={styles.bnb1}>{aa.bnb} BNB</div>
                </div>
                <div className={styles.cuoicart}>
                  <div className={styles.omauxam}>{aa.gio}</div>
                  <div className={styles.omauxanh}>Bid Now</div>
                  <div>
                    {" "}
                    <Image
                      src="/images/Vector (7).png"
                      width={27}
                      height={24}
                      style={{ marginLeft: "23px" }}
                    ></Image>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.morenft}>
            <div className={styles.morenft1}>More NFT's</div>
          </div>
        </div>
      </div>
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

          <img src="/images/conchuot.png" className={styles.imgconchuot} />
        </div>
      </div>
   
    </Layout>
  );
}
