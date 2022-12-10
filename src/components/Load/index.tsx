import React from 'react';
import { ActivityIndicator } from 'react-native';

import * as S from './styles';

export function Load() {
  return (
    <S.Container testID="load">
      <ActivityIndicator size="large" color="#333" />
    </S.Container>
  );
}
