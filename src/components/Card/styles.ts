import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: 80px;
  align-items: center;
`;

export const Content = styled.View`
  margin-left: 12px;
  flex-direction: row;
  flex: 1;
  border-bottom-width: 1px;
  border-color: #cccccc;
  border-style: solid;
`;

export const Info = styled.View`
  margin-bottom: 10px;
  width: 100%;
`;

export const RepoInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;

export const Avatar = styled.Image`
  width: 52px;
  height: 52px;
  border-radius: 28px;
  background: #d9d9d9;
`;

export const Stars = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.078px;
  color: #48484a;
`;

export const User = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #48484a;
`;
