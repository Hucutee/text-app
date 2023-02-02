import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Cart from "../../pages/images/cart.png";
import styles from "../../styles/Home.module.css";
import Group255 from "../../pages/images/Group255.png";
import Traitim from "../../pages/images/traitim.png";

Cartt.propTypes = {
  product: PropTypes.object,
};
export default function Cartt(product,props) {
  return (
    <div  className={styles.carthotdrops1}>
                <div>
                  <Image src={Cart} alt="" className={styles.imagecart} />
                </div>
                <div className={styles.cartname}>{product.data.name}</div>
                <div className={styles.cartname1}>{product.data.name1}</div>
                <div className={styles.bnb}>
                  <Image src={Group255} alt=""/>
                  <div className={styles.bnb1}>{product.data.bnb} BNB</div>
                </div>
                <div className={styles.cuoicart}>
                  <div className={styles.omauxam}>{product.data.gio}</div>
                  <div className={styles.omauxanh}>Bid Now</div>
                  <div>
                    {" "}
                    <Image 
                      src={Traitim} alt=""
                      width={27}
                      height={24}
                      style={{ marginLeft: "23px" }}
                    ></Image>
                  </div>
                </div>
              </div>
  );
}


