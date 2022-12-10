import React from 'react';
import { FlatList } from 'react-native';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';

import { Repository } from '../../dto/RepositoryDTO';

type HomeTemplateProps = {
  repositories: Repository[];
  handleRedirect: () => void;
};

export function HomeTemplate({
  repositories,
  handleRedirect,
}: HomeTemplateProps) {
  return (
    <FlatList
      contentContainerStyle={{ padding: 15 }}
      ListHeaderComponent={() => (
        <>
          <Header title="Repositótrios" />
        </>
      )}
      testID="home-template"
      data={repositories}
      keyExtractor={(item) => item.title}
      renderItem={({ item: repository, index }) => (
        <Card
          testID={`card-${index}`}
          data={repository}
          onPress={handleRedirect}
        />
      )}
    />
  );
}
