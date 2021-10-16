import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
`;

export const UpperLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const LowerLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const Copy = styled.div`
  align-self: center;

  span {
    color: #f00;
    cursor: pointer;
  }
`;

export const Link = styled.div`
  font-size: 0.6rem;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;