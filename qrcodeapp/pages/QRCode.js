//External depencies
import React, { Component, FunctionComponent } from "react";
import QRCode from "qrcode.react";
import { Button } from "@material-ui/core";
//Internal depencies
import styles from '../components/form.module.css';
import PrimaryButton from '../components/inputs/PrimaryButton';

const downloadQR = () => {
  const canvas = document.getElementsByTagName("canvas")[0];

  if (canvas) {
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr.png";

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
  } else {
    console.log("QR code not available");
  }
};

const DisplayQRCode = (props) => {
    const { value } = props;
      return (
        <>
        <div  className={styles.card}>
          <QRCode value={value} size={250} />
        </div>
       <PrimaryButton children="Download QR" generateQR={downloadQR}></PrimaryButton>
      </>
      );
};

export default DisplayQRCode;
