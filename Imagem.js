import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import icone from "./assets/favicon.png";

const Imagem = () => {
  return (
    <View style={styles.container}>
      <View>
        <Imagew
          style={{
            resizeMode: 'cover',
            height: 100,
            width: 200,
          }}
          source={icone}
        />
        <Text>resizeMode : contain</Text>
      </View>
      <View>
        <Image
          style={{
            resizeMode: 'stretch',
            height: 100,
            width: 200,
          }}
          source={icone}
        />
        <Text>resizeMode : stretch</Text>
      </View>
      <View>
        <Image
          style={{
            resizeMode: 'repeat',
            height: 100,
            width: 200,
          }}
          source={icone}
        />
        <Text>resizeMode : repeat</Text>
      </View>
      <View>
        <Image
          style={{
            resizeMode: 'center',
            height: 100,
            width: 200,
          }}
          source={icone}
        />
        <Text>resizeMode : center</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
  },
});

export default Imagem;