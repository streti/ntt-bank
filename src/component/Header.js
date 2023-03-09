import styled from "styled-components";

export default function Header({ name, onClick }) {
  return (
    <HeaderTag onClick={onClick}>
      <NameTag>{name}</NameTag>
      <Botton>TRETIAKOV</Botton>
    </HeaderTag>
  );
}

const NameTag = styled.div``;

const Botton = styled.div``;

const HeaderTag = styled.div`
  /* робимо темний колір фону блока */
  background: #1e1e1e;

  /* робимо щоб знизу блок мав закруглення */
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  /* режим верстки flex, робимо текст по центру */
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* ставимо колір тексту білим */
  color: #fff;

  /* робимо відступи вертикальні та горизонтальні,
    щоб текст не притискався до країв блоку
   */
  padding: 15px;
`;
