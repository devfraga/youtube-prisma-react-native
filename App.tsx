import { useEffect, useState } from 'react'
import { SafeAreaView, Text } from 'react-native';
import { Home } from './src/screen/home';
import { initializeDb } from './src/services/db';

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    const setup = async () => {
      await initializeDb();
      setDbInitialized(true);
    }

    setup()
  }, [])


  if(!dbInitialized){
    return(
      <SafeAreaView>
        <Text>Carregando...</Text>
      </SafeAreaView>
    )
  }

  return (
    <Home/>
  );
}
