import React from "react";
import { WebView } from "react-native-webview";
import Loading from "../components/LoadingWebView";

export default function RoadMap() {
  return (
    <WebView
      originWhitelist={["*"]}
      source={{ uri: "https://app.loopedin.io/ekadasi-app" }}
      startInLoadingState={true}
      renderLoading={() => <Loading />}
    />
  );
}
