import { Button, FlatList, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [title,setTitle] = useState("")
  const [items,setItems] = useState([])
  const [modalVisible,setModalVisible] = useState(false)

  const onHandleTitle = (t) => {
    setTitle(t)
  }

  const addItem = () => {
    const newItem ={
      id: 1,
      title:title
    }
    setItems([...items, title])
    setTitle("")
  }

  const onHandleModalClose = () => {
    setModalVisible(!modalVisible)
  }

  const onHandleDeleteItem = () => {
    
    setModalVisible(!modalVisible)
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Type text' value={title} onChangeText={onHandleTitle}/>
      <Button title='Save' onPress={addItem}/>
      <FlatList style={styles.flatList}
        data={items}
        keyExtractor={(_,index) => index}
        renderItem={({item})=>(
          <View style={styles.cards}>
            <Text style={styles.textCard}>{item}</Text>
            <Button title='Delete' onPress={onHandleModalClose}/>
          </View>
        )}
      />

        <Modal visible={modalVisible}>
          <View>
            <Text>Are you sure you want to delete this item?</Text>
            <Button title='YES' onPress={onHandleDeleteItem}/>
            <Button title='NO' onPress={onHandleModalClose}/>
          </View>
        </Modal>
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
    color: "white",
    fontSize:20,
    marginBottom:10
  },

  input: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding:5,
    borderColor: "grey",
    paddingHorizontal:50

  },

  flatList: {
    marginTop: 30,
    backgroundColor:"lightgrey",
    paddingHorizontal:100
  }
  
})