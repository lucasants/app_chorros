import { Text, StyleSheet, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>

      <Text style={styles.paragraph}>
          CACHORROS MUITO LOCOS
      </Text>

      <ScrollView>

    <View style={styles.cxfoto}>
 
      <Image style={styles.img} resizeMode="contain" source={require("./assets/ca.jpg")}></Image>
    
      <Text> Olha que porrinha lindo </Text>

    </View>

    <View style={styles.cxfoto}>
      
      <Image style={styles.img} resizeMode="contain" source={require("./assets/cacho.jpg")}></Image>

      <Text> OLHA QUE FOFOOOO </Text>  

    </View>

    <View>
    
    <Image style={styles.img} resizeMode="contain" source={require("./assets/cachorro.jpg")}/>

    <Text> LINDO DO TIO </Text>
 
    </View>
    
    </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center'
  },
  img: {
    width: 377,
    height: 400
  }
});
