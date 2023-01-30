import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { style } from "@mui/system";

export default function Layout({ description, children }) {
  return (
    <div>
      <Head>
        <title>Hau ne</title>
        {description && <meta name="description" content={description} />}
      </Head>
     
      <div className={styles.header}>
        <div className={styles.imageheader}>
          <Image src="/images/coco logo 1.png" width={97} height={36}></Image>
        </div>
        <div className={styles.menuheader}>
          <div className={styles.li_header}>Marketplace</div>
          <div className={styles.li_header}>Rankings</div>
          <div className={styles.li_header}>About</div>
          <div style={{ width: "55%" }} className={styles.li_header}>
            <div style={{ position: "relative" }}>
              <input
                className={styles.menuinput}
                type="text"
                placeholder="Search"
              />
              <Image
                className={styles.search}
                src="/images/Vector (1).png"
                width={20}
                height={20}
              ></Image>
            </div>
          </div>
          <div className={styles.menucreate}>Create</div>

          <div className={styles.li_header}>
            <Image
              src="/images/shirts.jpg"
              width={31}
              height={31}
              className={styles.menuavatar}
            ></Image>
          </div>
          <div className={styles.li_header}>
            <Image src="/images/Vector.png" width={29} height={24}></Image>
          </div>
        </div>
        <div className={styles.menuicon}>
          <div>
            <MenuIcon />
          </div>
        </div>
      </div>
      <div className={styles.scroll}>
      <div>{children}</div>

      <footer className={styles.footer}>
        <div className={styles.footer1}>
         <div className={styles.footer1_1_1}>
         <div className={styles.footer1_1}>
            <div className={styles.footer_title_coco}>
              <Image
                src="/images/coco logo 1.png"
                width={113}
                height={42}
              ></Image>
            </div>
            <p className={styles.footer_text1}>
              The largest digital marketplace for crypto collectibles and
              non-fungible tokens (NFTs) on the Binance Smart Cahin. Create,
              collect, sell, and showcase exclusive digital items.
            </p>
            <div className={styles.baicon} >
                <div style={{width:"36px", height:"36px" , background: "#55ACEE" , borderRadius:"50%" ,display:"flex" , float: "left", alignItems:"center", justifyContent:"center" , marginRight:"14px"}}>           
                 <Image src="/images/Vector (3).png" width={21} height={17}></Image>
</div>
              
                <Image
                src="/images/3532815 1.png"
                width={36}
                height={36} style={{marginRight:"14px"}}
              ></Image>
               <Image
                src="/images/2080304 1.png"
                width={36}
                height={36}
              ></Image>
            </div>
          </div>
          <div className={styles.footer1_2}>
            <div className={styles.footer_title}>Marketplace</div>
            <p className={styles.footer_text2}>
              All NFTs Art <br/>Collectibles <br/>Music <br/>Photography <br/>Sports Trading <br/>Cards
              Utility <br/>Virtual Worlds 
            </p>
          </div>
          <div className={styles.footer1_3}>
            <div className={styles.footer_title}>My Account</div>
            <p className={styles.footer_text3}>
              Profile Favorites <br/>My Collections <br/>Settings
            </p>
          </div>
          <div className={styles.footer1_4}>
            <div className={styles.footer_title}>Stay in the loop</div>
            <p className={styles.footer_text4}>
              Join our  mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating NFTs.
            </p>
            <div className={styles.footer_input}>
              <input
                className={styles.footerinput}
                type="text"
                placeholder="Enter your email address..
                "
              />
                       <div className={styles.footersubcribe}>Subscibe Now</div>

            </div>
          </div>
         </div>

        </div>
        <div className={styles.footer2}>
          <div className={styles.footer2_1}>
          <div className={styles.footertrai}><div className={styles.footer2_text}>Copyright © 2022 Coco</div></div>
          <div className={styles.footerphai}>
            <div className={styles.footer2_text} style={{float:"left", marginRight:"24px"}}>Privacy Policy</div>
            <div className={styles.footer2_text} style={{float:"left"}}>Terms & Conditions</div>
          </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
