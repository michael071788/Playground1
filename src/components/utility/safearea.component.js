import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

// export const SafeAreaComponent = styled(SafeAreaView)`
//   flex: 1;
//   ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
//   background-color: ${(props) => props.theme.color.bg.primary};
// `;

export const SafeAreaComponent = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: #ffffff;
`;
