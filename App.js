import React from "react";
import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import news_data from "./news_data.json";
import news_banner_data from "./news_banner_data.json"
import NewsCard from "./src/components/NewsCard/NewsCard";


function App(){
  const renderItem=({item}) => <NewsCard news={item} />

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
     
      <FlatList 
        ListHeaderComponent={()=> ( 
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              news_banner_data.map(bannerNews => (
                <Image
                style={styles.banner_image} 
                source={{uri:bannerNews.imageUrl}}
                />
              
              ))
            }
          

          </ScrollView>

        )}
        data={news_data} 
        renderItem={renderItem}
        keyExtractor={item => item.u_id.toString()}  >

      </FlatList>

    </SafeAreaView>

  )
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#eceff1",

  },
  headerText:{
    fontWeight:"bold",
    fontSize:50,
  },
  banner_image:{
    height:Dimensions.get("window").height /5,
    width:Dimensions.get("window").width /2,
  }

})


export default App;