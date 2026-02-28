import { Stack } from "expo-router";
import { Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Layout() {
  return (

    <Stack
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerLeft: ({ canGoBack }) =>
          canGoBack ? <BackButton /> : null,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="inicio" options={{ title: "Inicio" }} />
      <Stack.Screen name="perfil" options={{ title: "Perfil" }} />
      <Stack.Screen name="buscar" options={{ title: "Buscar" }} />
    </Stack>
  );
}

function BackButton() {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Text style={{ marginLeft: 10 }}>← Regresa</Text>
    </Pressable>
  );
}