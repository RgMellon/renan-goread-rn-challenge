import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import WebView from 'react-native-webview';
import { Load } from '../../components/Load';

type RouteParams = {
  html: string;
};

export function Details() {
  const [load, setLoad] = useState(true);

  const route = useRoute();

  const { html } = route.params as RouteParams;

  return (
    <>
      <WebView
        renderLoading={() => <Load />}
        startInLoadingState={true}
        style={{ flex: 1 }}
        source={{ uri: html }}
      />
    </>
  );
}
