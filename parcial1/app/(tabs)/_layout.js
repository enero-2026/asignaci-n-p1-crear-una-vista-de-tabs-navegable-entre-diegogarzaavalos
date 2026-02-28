import {Tabs} from "expo-router";

export default function Layout(){
    return(
        <Tabs screenOptions={{ tabBarActiveTintColor: "rojo"}}>
            <Tabs.Screen name="perfil"></Tabs.Screen>
            <Tabs.Screen name="inicio"></Tabs.Screen>
            <Tabs.Screen name="buscar"></Tabs.Screen>
            <Tabs.Screen name="index"></Tabs.Screen>
        </Tabs>
    )
}