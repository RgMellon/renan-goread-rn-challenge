import React, { useState } from 'react';
import { Text, TextInputProps } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import * as S from './styles';

export function Search() {
  const [search, setSearch] = useState('');
  const [doSearch, setDoSearch] = useState('');

  function handleSearch() {
    alert('oi');
  }

  return (
    <S.Container testID="search-container">
      <Ionicons name="search" size={17} color={'#3c3c4399'} />
      <S.SearchInput
        testID="input-search"
        placeholder="Buscar repositórios"
        value={search}
        returnKeyType="search"
        onChangeText={(text) => {
          setSearch(text);
        }}
        onEndEditing={handleSearch}
      />
    </S.Container>
  );
}
