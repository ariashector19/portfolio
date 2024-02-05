// Home.tsx
import React from "react";
import { Motion } from "../motion/Motion";
import styled from "styled-components";
import "./home.scss";

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Divide el espacio en dos columnas */
  gap: 20px; /* Espacio entre las columnas */
  max-width: 1200px; /* Ancho máximo del contenedor */
  margin: 0 auto; /* Centra el contenedor en la página */
  padding: 20px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageContainer = styled.div`
  text-align: center;
`;

const RoundedImage = styled.img`
  border-radius: 50%; /* Hace que la imagen sea redondeada */
  width: 100%; /* Ajusta el ancho de la imagen al contenedor */
  max-width: 300px; /* Ancho máximo de la imagen */
  height: auto; /* Ajusta la altura de la imagen automáticamente */
`;

export const Home: React.FC = () => {
  return (
    <Motion>
      <HomeContainer className="home-container">
        <TextContainer>
          <h1>Bienvenido a mi Portafolio como Desarrollador Web</h1>
        </TextContainer>
        <ImageContainer>
          <img src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortRound&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Red&eyeType=Default&eyebrowType=RaisedExcited&mouthType=Twinkle&skinColor=Light" />
        </ImageContainer>
      </HomeContainer>
    </Motion>
  );
};
