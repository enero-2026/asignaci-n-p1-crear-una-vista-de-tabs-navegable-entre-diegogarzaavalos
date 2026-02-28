import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useRouter, Stack } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen
        options={{
          title: "Home",
          headerTitleAlign: "center",
        }}
      />

      <View style={styles.container}>

        <Text style={styles.title}>Pantalla Principal</Text>

        <View style={styles.navContainer}>

          <Pressable
            style={styles.left}
            onPress={() => router.push('/inicio')}
          >
            <Text>Inicio</Text>
          </Pressable>

          <Pressable
            style={styles.center}
            onPress={() => router.push('/perfil')}
          >
            <Text>Perfil</Text>
          </Pressable>

          <Pressable
            style={styles.right}
            onPress={() => router.push('/buscar')}
          >
            <Text>Buscar</Text>
          </Pressable>

        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 22,
  },
  navContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  left: {
    alignSelf: 'flex-start',
  },
  center: {
    alignSelf: 'center',
  },
  right: {
    alignSelf: 'flex-end',
  },
});