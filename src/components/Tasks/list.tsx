import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Task } from '@prisma/client'
import { prismaClient } from '../../services/db';
import { Ionicons } from '@expo/vector-icons'

interface Props{
  data: Task  
}

export function TaskList({ data }: Props) {


  async function handleDeleteTask(){
    await prismaClient.task.delete({
      where:{
        id: data.id
      }
    })
  }

  async function handleUpdateStatus(){
    await prismaClient.task.update({
      where:{
        id: data.id
      },
      data:{
        completed: true
      }
    })
  }

 return (
   <View style={styles.container}>
    <Text style={styles.text}>{data.name}</Text>

    <View style={styles.buttons}>
      <Pressable style={styles.buttonDelete} onPress={handleDeleteTask}>
        <Ionicons name="trash-outline" size={16} color="#FFF"/>
      </Pressable>

      {!data.completed && (
      <Pressable style={styles.buttonComplete} onPress={handleUpdateStatus}>
        <Ionicons name="checkmark-outline" size={16} color="#FFF"/>
      </Pressable>
      ) }
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#64748b",
    marginBottom: 30,
    padding: 14,
    borderRadius: 4,
  },
  text:{
    fontWeight: "500",
    color: "#FFF"
  },
  buttons:{
    position: "absolute",
    bottom: -18,
    flexDirection: "row",
    right: 0,
    zIndex: 99,
    gap: 8,
  },
  buttonDelete:{
    backgroundColor: "#ef4444",
    padding: 6,
    borderRadius: 99,
  },
  buttonComplete:{
    backgroundColor: "#22c55e",
    padding: 6,
    borderRadius: 99,
  }
})