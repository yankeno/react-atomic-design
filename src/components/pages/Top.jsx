import styled from "styled-components";
import { DefaultLayout } from "../template/DefaultLayout";

export const Top = () => {
  return (
    <DefaultLayout>
      <SContainer>
        <h2>TOPページ</h2>
      </SContainer>
    </DefaultLayout>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
