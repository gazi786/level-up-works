import React from "react";
import AidenAndrews from "./students/AidenAndrews.png";
import AliceKindellan from "./students/AliceKindellan.png";
import CourtneyBristol from "./students/CourtneyBristol.png";
import HanuNepe from "./students/HanuNepe.png";
import HarryMcGrath from "./students/HarryMcGrath.png";
import JavierFuego from "./students/JavierFuego.png";
import LisaHoran from "./students/LisaHoran.png";
import LuciaMendez from "./students/LuciaMendez.png";
import MarkOLeary from "./students/MarkOLeary.png";
import NaganiCortes from "./students/NaganiCortes.png";
import NeveahMachenry from "./students/NeveahMachenry.png";
import RawiriFletcher from "./students/RawiriFletcher.png";
import ShaneOMonahan from "./students/ShaneOMonahan.png";
import SimonLaine from "./students/SimonLaine.png";
import TokioHan from "./students/TokioHan.png";

import styles from "./StudentProfiles.module.css";

export default function StudentProfiles() {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <br></br>
        <div className="card_image">
          <img src={AidenAndrews} alt="" />
        </div>
        <br></br>
        <h3>Aiden Andrews</h3>
      </div>

      <div className={styles.card}>
        <br></br>
        <div className="card_image">
          <img src={AliceKindellan} alt="" />
        </div>
        <br></br>
        <h3>Alice Kindellan</h3>
      </div>

      <div className={styles.card}>
        <br></br>
        <div className="card_image">
          <img src={CourtneyBristol} alt="" />
        </div>
        <br></br>
        <h3>Courtney Bristol</h3>
      </div>

      <div className={styles.card}>
        <br></br>
        <div className="card_image">
          <img src={HanuNepe} alt="" />
        </div>
        <br></br>
        <h3>Hanu Nepe</h3>
      </div>
      <div className={styles.card}>
        <br></br>
        <div className="card_image"></div>
        <img src={HarryMcGrath} alt="" />
        <br></br>
        <h3>Harry McGrath</h3>
      </div>
      <div className={styles.card}>
        <br></br>
        <div className="card_image">
          <img src={JavierFuego} alt="" />
        </div>
        <br></br>
        <h3>Javier Fuego</h3>
      </div>
      <div className={styles.card}>
        <br></br>
        <div className="card_image">
          <img src={LisaHoran} alt="" />
        </div>
        <br></br>
        <h3>Lisa Horan</h3>
      </div>
      <div className={styles.card}>
        <br></br>
        <div className="card_image">
          <img src={LuciaMendez} alt="" />
        </div>
        <br></br>
        <h3>Lucia Mendez</h3>
      </div>
      <div className={styles.card}>
        <br></br>
        <div className="card_image">
          <img src={MarkOLeary} alt="" />
        </div>
        <br></br>
        <h3>Mark OLeary</h3>
      </div>
      <div className={styles.card}>
        <br></br>
        <div className="card_image">
          <img src={NaganiCortes} alt="" />
        </div>
        <br></br>
        <h3>Nagani Cortes</h3>
      </div>
      <div className={styles.card}>
        <br></br>
        <div className="card_image">
          <img src={NeveahMachenry} alt="" />
        </div>
        <br></br>
        <h3>Neveah Machenry</h3>
      </div>
      <div className={styles.card}>
        <br></br>
        <div className="card_image">
          <img src={RawiriFletcher} alt="" />
        </div>
        <br></br>
        <h3>Rawiri Fletcher</h3>
      </div>
      <div className={styles.card}>
        <br></br>
        <div className="card_image">
          <img src={ShaneOMonahan} alt="" />
        </div>
        <br></br>
        <h3>Shane OMonahan</h3>
      </div>
      <div className={styles.card}>
        <br></br>
        <div className="card_image">
          <img src={SimonLaine} alt="" />
        </div>
        <br></br>
        <h3>Simon Laine</h3>
      </div>
      <div className={styles.card}>
        <br></br>
        <div className="card_image">
          <img src={TokioHan} alt="" />
        </div>
        <br></br>
        <h3>Tokio Han</h3>
      </div>
    </div>
  );
}
