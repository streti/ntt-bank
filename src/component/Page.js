import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  background: linear-gradient(69deg, #6d8fae 50%, #649fa2 89%);

  /* робимо фон на всю ширину */
  width: 100%;
`;
