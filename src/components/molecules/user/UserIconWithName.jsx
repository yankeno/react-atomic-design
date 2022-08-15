import { memo } from "react";
// import { useContext } from "react";
import styled from "styled-components";
// import { UserContext } from "../../../providers/UserProvider";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/UserState";

export const UserIconWithName = memo((props) => {
  const { image, name } = props;

  // const { userInfo } = useContext(UserContext);

  /**
   * 値の更新を行わない場合(state の値だけ必要な場合)は
   * useRecoilValue を使う
   */
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <SContainer>
      <SImage height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>edit</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
  padding-bottom: 18px;
`;

const SImage = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
