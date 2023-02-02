import { style } from "@mui/system";
import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.css";
import data from "../../pages/data/data";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@mui/material/styles";
import vecto10 from "../../pages/images/vecto10.png";
import vecto9 from "../../pages/images/vecto9.png";
import avt from "../../pages/images/avt.png";
import Group255 from "../../pages/images/Group255.png";
const StyledSlider = styled(Slider)(({ theme }) => ({

  ".slick-dots li.slick-active button:before": {
    opacity: .75,
    color: "green",
},
".slick-dots li button:before": {
  fontSize:"12px"
},


}));
export default function Top() {

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
              src={vecto10} alt=""
              width={9.33}
              height={5.33}
              style={{ marginLeft: "10px", marginTop: "9px" }}
            ></Image>
          </div>
        </div>
        {data.nguoi.map((aa,x) => (
          <div key={aa.stt} className={styles.top4}>
            <div className={styles.top4_1}>{aa.stt}</div>
            <div style={{ position: "relative" }} className={styles.top4_2}>
              <Image src={avt} alt=""/>
              {aa.stt == 1 ? (
                <Image
                  src={vecto9} alt=""
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
              <Image src={Group255} alt=""/>
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
              src={vecto10} alt=""
              width={9.33}
              height={5.33}
              style={{ marginLeft: "10px", marginTop: "9px" }}
            ></Image>
          </div>
        </div>
        {data.nguoi.map((aa,x) => (
          <div key={aa.stt} className={styles.top4}>
            <div className={styles.top4_1}>{aa.stt}</div>
            <div style={{ position: "relative" }} className={styles.top4_2}>
              <Image src={avt} alt="" />
              {aa.stt == 1 ? (
                <Image
                  src={vecto9} alt=""
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
                <Image src={Group255}  alt=""/>
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
              src={vecto10} alt=""
              width={9.33}
              height={5.33}
              style={{ marginLeft: "10px", marginTop: "9px" }}
            ></Image>
          </div>
        </div>
        {data.nguoi.map((aa,x) => (
          <div key={aa.stt} className={styles.top4}>
            <div className={styles.top4_1}>{aa.stt}</div>
            <div style={{ position: "relative" }} className={styles.top4_2}>
              <Image src={avt} alt="" />
              {aa.stt == 1 ? (
                <Image
                  src={vecto9} alt=""
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
              <Image src={Group255} alt=""/>
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
  );
}
