import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import Ionicons from '@expo/vector-icons/Ionicons';

import * as S from './styles';
import { searchRepository } from '../../store/repositories/actions';

export function Search() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  function handleSearch() {
    if (!search) {
      alert('Ops, digite um repositório válido');
      return;
    }
    dispatch(searchRepository(search));
  }

  return (
    <S.Container testID="search-container">
      <Ionicons name="search" size={17} color={'#3c3c4399'} />
      <S.SearchInput
        testID="input-search"
        placeholder="Buscar repositórios"
        value={search}
        returnKeyType="search"
        onChangeText={setSearch}
        onEndEditing={handleSearch}
        onBlur={handleSearch}
      />
    </S.Container>
  );
}
