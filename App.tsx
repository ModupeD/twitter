import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,FlatList,Pressable } from 'react-native';
import Tweet from './components/Tweet'
import tweets from './assets/data/tweets';
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function App() {
  console.log('App rendering', { tweets });
  return (
    <View style={styles.page}>
      <FlatList 
        data={tweets}
        renderItem={({ item }) => {console.log(item); return <Tweet tweet={item} />}}
      />
       <Pressable  style={styles.floatingButton}>
      <Link href="/" asChild>
        <Entypo
          name="plus"
          size={24}
          color="white"
        />
      </Link>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  page:{
    flex:1,
    backgroundColor:"white",
    paddingTop:50
  },
  floatingButton: {
    backgroundColor: "#1C9BF0",

    borderRadius: 25,
    padding:15,
    
    position: "absolute",
    right: 15,
    bottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
})