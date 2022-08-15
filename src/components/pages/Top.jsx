// import { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { DefaultLayout } from "../template/DefaultLayout";
// import { UserContext } from "../../providers/UserProvider";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/UserState";

export const Top = () => {
  const navigate = useNavigate();

  // const { setUserInfo } = useContext(UserContext);

  /**
   * state の値を使用しない(更新関数のみ使用する)場合、
   * useSetRecoilState を使用する
   */
  const setUserInfo = useSetRecoilState(userState);
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    navigate("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    navigate("/users");
  };
  return (
    <DefaultLayout>
      <SContainer>
        <h2>TOPページ</h2>
        <SecondaryButton onClick={onClickAdmin}>管理者ユーザ</SecondaryButton>
        <br />
        <br />
        <SecondaryButton onClick={onClickGeneral}>一般ユーザ</SecondaryButton>
      </SContainer>
    </DefaultLayout>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
