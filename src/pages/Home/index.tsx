import React from 'react';

import { HomeTemplate } from '../../templates/HomeTemplate';

import { useSelector } from 'react-redux';
import { StateProps } from '../../store/repositories/types';

import { useNavigation } from '@react-navigation/native';

export function Home() {
  const { navigate } = useNavigation();

  const repositories = useSelector(
    (state: StateProps) => state.repositories.data
  );

  function handleRedirect(url?: string) {
    navigate('Details', {
      html: url!,
    });
  }

  return (
    <HomeTemplate repositories={repositories} handleRedirect={handleRedirect} />
  );
}
