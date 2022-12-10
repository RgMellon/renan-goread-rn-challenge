import React from 'react';
import { Search } from '../Search';

import * as S from './styles';

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <S.Container testID="header">
      <S.Title> {title} </S.Title>

      <Search placeholder="Buscar repositórios" />
    </S.Container>
  );
}
