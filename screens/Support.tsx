import React from "react";
import { WebView } from "react-native-webview";
import Loading from "../components/LoadingWebView";

export default function PureBhakti() {
  return (
    <WebView
      originWhitelist={["*"]}
      source={{ uri: "https://vitaltechresults.com/support" }}
      startInLoadingState={true}
      renderLoading={() => <Loading />}
    />
  );
}
