import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import { useState } from 'react';
import { StyleSheet, View } from "react-native";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  
const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  }
  return (
    <View style={ styles.container}>
<View style ={styles.imageContainer}>
  <ImageViewer imgSource={PlaceholderImage} selectedImage = {selectedImage}/>
      </View>
      <View style={styles.footerContatiner}>
        <Button theme="primary"  label="Choose a photo" onPress={pickImageAsync}/>
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor:"#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white"
  },
  button:{
    fontSize:20,
    textDecorationLine: "underline",
    color: "#fff",
  },
  imageContainer:{
flex: 1,
  },
  footerContatiner:{
    flex: 1/3,
    alignItems: "center",
  }
    });
