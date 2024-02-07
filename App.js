import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [title,setTitle] = useState("")
  const [items,setItems] = useState("")

  const onHandleTitle = (t) => {
    setTitle(t)
  }

  const addItem = () => {
    const newItem ={
      id: "100",
      title:title
    }
    setItems([...items, title])
    setTitle("")
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Type text' value={title} onChangeText={onHandleTitle}/>
      <Button title='Save' onPress={addItem}/>
      <FlatList
      data={items}
      keyExtractor={(_,index) => index}
      renderItem={({item})=>
        <View style={styles.cards}>
          <Text style={styles.textCard}>{item}</Text>
        </View>
        }
        />
    </View>
  )
}

export default App

const styles = StyleSheet.create({

  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop:60,
  },

  cards: {
    margin:10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "#007FF5",
    borderColor: "grey",
    minWidth: 100,
  },

  textCard: {
    textAlign: "center",
    color: "white"
  },

  input: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding:5,
    borderColor: "grey",

  }
})