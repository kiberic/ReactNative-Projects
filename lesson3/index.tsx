
import { Platform, StyleSheet, ScrollView, View, Text, Image,ImageBackground } from 'react-native';
import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { green, rgbaArrayToRGBAColor, rgbaColor } from 'react-native-reanimated/lib/typescript/Colors';
import ToDo from '@/components/todo';
import TodoList from '@/components/todo/todList';
import ToDoItem from '@/components/todo/todoItem';

export default function HomeScreen() {
  return (      
  <ImageBackground
      source={{uri:"https://img.freepik.com/premium-vector/infinity-wireframe-background-graphic-design_263779-2728.jpg?semt=ais_hybrid&w=740"}}
      style={styles.backgroundImg}>
      <ScrollView style={styles.screen}>
        <View style={styles.headerRow}>
          <View style={styles.textBlock}>
            <Text style={styles.text}>Name: Kirill</Text>
            <Text style={styles.text}>Age: 17</Text>
            <Text style={styles.text}>Country: KZ</Text>
          </View>
          <Image
            source={{uri: "https://avatars.mds.yandex.net/i?id=748f026f3cd7ecb56dca67f4f32fd3cb0730d4c1-17800914-images-thumbs&n=13"}}
            style={styles.image}/>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.description}>
            <Text style={styles.text2}>Skills:</Text>
            <Text style={styles.text2}>Python | React | AI | JavaScript | Node.js</Text>
          </View>

          <View style={styles.description}>
            <Text style={styles.text2}>Email: kirill2008@gmail.com</Text>
          </View>
        </View>
        <br />
        <View style={styles.containerImages}>
          <Text style={styles.imgInfoTxt}>Favorite serial</Text>
            <Image source={{uri: "https://wallpaper.forfun.com/fetch/55/55f9e33341f7a685b467523833098e46.jpeg?w=1200&r=0.5625&f=webp"}}
            style={styles.imageInfo}/>
        </View>

        {/* Lesson 2: Events */}
        <View>
          <ToDo/>
        </View>
        <br />
      </ScrollView>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 0,
  },
  backgroundImg: {
    flex: 1,
    resizeMode: "cover",
    padding: 12,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(25, 24, 21, 0.7)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#8a8787",
    padding: 16,
  },
  textBlock: {
    flexDirection: "row",
    gap: 50
  },
  text: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
    textShadowColor: "#9e9e9e",
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 2
  },
  infoContainer: {
    backgroundColor: "#3c3c3c",
    width: "100%",
    padding: 12,
    borderRadius: 8,
    marginTop: 18
  },
  text2: {
    flexDirection: "row",
    gap: 70,
    color: "#00ffae",
    fontFamily: "sans-serif",
    fontSize: 16,
    fontWeight: 900
  },
  description: {
    backgroundColor: "#8b8b8b7a",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 12,
    borderRadius: 6
  },
  textInfo: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 100, 
    borderColor: "#fff",
    borderWidth: 1
  },
  containerImages: {
    alignItems: "center",
    width: "100%",
    marginTop: 20,
    padding: 12,
    backgroundColor: "rgba(0,0,0,0.4)", 
    borderRadius: 8,
  },
  imageInfo: {
    width: "70%",
    aspectRatio: 16/9,
    borderRadius: 10,
    resizeMode: "contain"
  },
  imgInfoTxt: {
    color: "#fff",
    paddingBottom: 12,
    fontFamily: "sans-serif",
    fontWeight: "800",
    fontSize: 16,
  }
});
