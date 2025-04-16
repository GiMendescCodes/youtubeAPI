import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { WebView } from "react-native-webview";
import { buscarVideosVimeo } from "./vilmo"; // importa a função

export default function PesquisarV() {
  const [busca, setBusca] = useState("");
  const [videos, setVideos] = useState([]);
  const [link, setLink] = useState("");
  const [url, setUrl] = useState("");

  const procurar = async () => {
    try {
      const resultados = await buscarVideosVimeo(busca);
      setVideos(resultados);
    } catch (err) {
      console.error("Erro ao buscar vídeos:", err);
    }
  };

  return (
    <View style={styles.container}>
      {/* Exibição direta de link do Vimeo */}
      <TextInput
        placeholder="Cole o link do vídeo do Vimeo"
        value={link}
        onChangeText={setLink}
        style={styles.input}
      />
      <TouchableOpacity style={styles.botao} onPress={() => setUrl(link)}>
        <Text style={styles.textoBotao}>Carregar</Text>
      </TouchableOpacity>

      {url !== "" && (
        <WebView
          style={styles.webviewVimeo}
          source={{ uri: url }}
          javaScriptEnabled
        />
      )}

      {/* Campo de busca por palavras-chave */}
      <TextInput
        placeholder="Buscar vídeos do Vimeo"
        value={busca}
        onChangeText={setBusca}
        style={styles.input}
      />
      <TouchableOpacity style={styles.botao} onPress={procurar}>
        <Text style={styles.textoBotao}>Buscar</Text>
      </TouchableOpacity>

      {/* Lista de vídeos encontrados */}
      <ScrollView style={styles.scrollView}>
        {videos.map((video) => (
          <View key={video.uri} style={styles.containerVideo}>
            <Text style={styles.tituloVideo}>{video.name}</Text>
            <WebView
              style={styles.webview}
              javaScriptEnabled
              domStorageEnabled
              source={{
                html: `<iframe width="100%" height="315" src="https://player.vimeo.com/video/${video.uri.split("/").pop()}" frameborder="0" allowfullscreen></iframe>`,
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  input: {
    borderColor: "#6200ee",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  botao: {
    backgroundColor: "#03dac5",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 15,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
  webviewVimeo: {
    height: 250,
    width: "100%",
    marginBottom: 20,
  },
  scrollView: {
    marginTop: 10,
  },
  containerVideo: {
    marginBottom: 30,
  },
  tituloVideo: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  webview: {
    height: 200,
  },
});
