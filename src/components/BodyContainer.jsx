import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { close } from "../redux/nav";

const BodyContainer = (props) => {
  const isNavOpen = useSelector((state) => state.nav.isOpen);
  const dispatch = useDispatch();

  return (
    <ContentContainer
      isNavOpen={isNavOpen}
      onTouchStart={() => {
        isNavOpen && dispatch(close());
      }}
    >
      {props.children}
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  position: absolute;
  top: 64px;
  bottom: 0;
  right: 0;
  left: 0;
  filter: ${(props) => props.isNavOpen && "blur(4px)"};
  z-index: -1;
  padding: 10px 0 0 0;
`;

export default BodyContainer;
