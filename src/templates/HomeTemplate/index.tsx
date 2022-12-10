import React from 'react';
import { FlatList, View } from 'react-native';
import { Card } from '../../components/Card';
import { Empty } from '../../components/Empty';
import { Header } from '../../components/Header';

import { Repository } from '../../dto/RepositoryDTO';

import * as S from './styles';

type HomeTemplateProps = {
  repositories: Repository[];
  handleRedirect: (url?: string) => void;
};

export function HomeTemplate({
  repositories,
  handleRedirect,
}: HomeTemplateProps) {
  return (
    <S.Container>
      <FlatList
        contentContainerStyle={{ padding: 15 }}
        ListHeaderComponent={() => (
          <>
            <Header title="Repositórios" />
          </>
        )}
        onEndReachedThreshold={0.1}
        ListEmptyComponent={() => <Empty />}
        testID="home-template"
        data={repositories}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item: repository, index }) => (
          <Card
            testID={`card-${index}`}
            data={repository}
            onPress={() => {
              handleRedirect(repository?.html_url);
            }}
          />
        )}
      />
    </S.Container>
  );
}
