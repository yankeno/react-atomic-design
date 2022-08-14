import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

/**
 * export した style を適用する場合には
 * styled(export した style) と記載する
 * -> 中身には個別に適用する style を記載する
 * -> クラスの継承みたいな感じ
 */
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
