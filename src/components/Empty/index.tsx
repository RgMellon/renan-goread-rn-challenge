import React from 'react';
import { Text } from 'react-native';

import * as S from './styles';

export function Empty() {
  return (
    <S.Container testID="empty">
      <S.Image
        source={{
          uri: 'https://octodex.github.com/images/inspectocat.jpg',
        }}
      />

      <S.Content>
        <S.Subtitle> Ops, meio vazio por aqui ... </S.Subtitle>
        <S.Subtitle> Que tal buscar por um repositório? </S.Subtitle>
      </S.Content>
    </S.Container>
  );
}
