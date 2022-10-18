import React from "react";
import styled from "styled-components";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import qr0w from "../../images/qr0w.svg";
import qr0d from "../../images/qr0d.svg";
import qr1w from "../../images/qr1w.svg";
import qr1d from "../../images/qr1d.svg";
import qr2w from "../../images/qr2w.svg";
import qr2d from "../../images/qr2d.svg";
import Card from "./components/card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ConfettiStyled = styled(Confetti)`
  z-index: -100000;
`;

const StyledSlider = styled(Slider)`
  &,
  .slick-track,
  .slick-slide,
  .slick-list,
  .slick-slide > div {
    outline: none;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
`;

const Landing = () => {
  const { width, height } = useWindowSize();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
  };

  return (
    <>
      <ConfettiStyled
        width={width}
        height={height}
        numberOfPieces={60}
        tweenDuration={5000}
        colors={[`#e9993f`, `#ffb344`, `#ffbf43`, `#ffd741`]}
        wind={0.01}
        opacity={0.5}
      />
      <StyledSlider {...settings}>
        <Card srcw={qr0w} srcd={qr0d} name={"이동령"} />
        <Card srcw={qr1w} srcd={qr1d} name={"정민경"} />
        <Card srcw={qr2w} srcd={qr2d} name={"이민성"} />
        <Card srcw={qr0w} srcd={qr0d} name={"박세현"} />
        <Card srcw={qr0w} srcd={qr0d} name={"김예은"} />
        <Card srcw={qr0w} srcd={qr0d} name={"이한주"} />
        <Card srcw={qr0w} srcd={qr0d} name={"최재오"} />
        <Card srcw={qr0w} srcd={qr0d} name={"이성"} />
        <Card srcw={qr0w} srcd={qr0d} name={"김홍진"} />
        <Card srcw={qr0w} srcd={qr0d} name={"주시현"} />
        <Card srcw={qr0w} srcd={qr0d} name={"이혜윤"} />
        <Card srcw={qr0w} srcd={qr0d} name={"박진아"} />
      </StyledSlider>
    </>
  );
};

export default Landing;
