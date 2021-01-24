import React from "react";

//Redux
import { useDispatch } from "react-redux";
import { LoadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";

//import styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { smallImage } from "../util";

const Game = ({ name, released, id, image }) => {
  const stringPathId = id.toString();
  //Load Detail Handler
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden"; //wywala drugiego scrolla
    dispatch(LoadDetail(id));
  };

  return (
    <StyledGame onClick={loadDetailHandler} layoutId={stringPathId}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  cursor: pointer;
  border-radius: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
