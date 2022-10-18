import React from "react";
import styled from "styled-components";
import phone from "../../../images/phone.png";
import { MdShare } from "react-icons/md";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const CardWrapper = styled.div`
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border-radius: 50px;
  background-color: white;
  box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  @media (prefers-color-scheme: dark) {
    background-color: #181818;
    box-shadow: 0px 0px 60px 8px rgba(255, 255, 255, 0.15);
  }
`;

const StyledText = styled.div`
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "30")}px;
  font-weight: 900;
  @media (prefers-color-scheme: dark) {
    color: ${(props) => (props.color ? props.color : "white")};
  }
`;

const Margin = styled.div`
  width: 100%;
  height: ${(props) => (props.margin ? props.margin : "0")}px;
`;

const StyledImg = styled.img`
  width: ${(props) => (props.width ? props.width : "100")}px;
  height: ${(props) => (props.height ? props.height : "100")}px;
`;

const StyledQr = styled.img`
  width: ${(props) => (props.width ? props.width : "100")}px;
  height: ${(props) => (props.height ? props.height : "100")}px;
  content: url(${(props) => (props.srcw ? props.srcw : "")});
  @media (prefers-color-scheme: dark) {
    content: url(${(props) => (props.srcd ? props.srcd : "")});
  }
`;

const StyledButton = styled.button`
  width: 250px;
  height: 50px;
  background-color: #e9993f;
  border-radius: 25px;
  border: none;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const StyledShareIcon = styled(MdShare)`
  font-size: 20px;
  color: white;
  margin-right: 10px;
`;

const Card = (props) => {
  return (
    <Wrapper>
      <CardWrapper>
        <Margin margin={30} />
        <StyledText color={"#e9993f"}>LIKE LION 11th</StyledText>
        <Margin margin={10} />
        <StyledImg src={phone} />
        <Margin margin={10} />
        <StyledText fontSize={40}>{props.name}</StyledText>
        <Margin margin={15} />
        <StyledQr
          srcw={props.srcw}
          srcd={props.srcd}
          width={180}
          height={180}
        />
        <Margin margin={15} />
        <StyledButton>
          <StyledShareIcon />
          <StyledText fontSize={17} color={"white"}>
            링크 공유하기
          </StyledText>
        </StyledButton>
      </CardWrapper>
    </Wrapper>
  );
};

export default Card;
