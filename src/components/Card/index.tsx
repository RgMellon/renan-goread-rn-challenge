import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Repository } from '../../dto/RepositoryDTO';

import * as S from './styles';

type CardProps = {
  data: Repository;
} & TouchableOpacityProps;

export function Card({ data, ...rest }: CardProps) {
  return (
    <S.Container testID="card-container" {...rest}>
      <S.Avatar testID="card-avatar" source={{ uri: data.owner.avatar_url }} />

      <S.Content>
        <S.Info>
          <S.RepoInfo>
            <S.Title>{data.name}</S.Title>
            <S.Stars testID="card-stars">
              {data.stargazers_count} stars{' '}
            </S.Stars>
          </S.RepoInfo>
          <S.User>{data.owner.login}</S.User>
        </S.Info>
      </S.Content>
    </S.Container>
  );
}
