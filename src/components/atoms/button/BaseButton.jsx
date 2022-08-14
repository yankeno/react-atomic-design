import styled from "styled-components";

/**
 * 共通の style は別コンポーネントに切り出しておく
 */
export const BaseButton = styled.button`
  color: #fff;
  padding: 6px 24px;
  border-radius: 9999px;
  border: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
