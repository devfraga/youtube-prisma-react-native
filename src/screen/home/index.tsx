import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { FormTask } from '../../components/Form';
import { Tasks } from '../../components/Tasks';
import { useState } from 'react';
import Actions from '../../components/actions';

export function Home() {
  const [filter, setFilter] = useState(false)

  return (
    <>
      <StatusBar backgroundColor="#0f172a" barStyle="light-content" />

    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Easy Notes</Text>
      <Text style={styles.text}>Crie e gerencie suas tarefas</Text>

      <FormTask/>

      <Actions filter={filter} setFilter={ (status) => setFilter(status) } />

      {filter && (
        <Tasks filter={filter} />
      )}

      {!filter && (
        <Tasks filter={filter} />
      )}

    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 14,
  },
  title:{
    color: "#FFF",
    fontSize: 24,
    fontWeight: 'bold'
  },
  text:{
    color: "#e4e4e7"
  }
});
