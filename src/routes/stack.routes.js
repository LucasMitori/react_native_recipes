import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";
import { StyleSheet } from "react-native";

const StackRoutes = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "#008E97" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#008E97" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={WelcomeScreen}
          options={{
            tabBarLabel: "Welcome",
            tabBarLabelStyle: { color: "#008E97" },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="#008E97" />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Recipes"
          component={RecipeDetailScreen}
          options={{
            tabBarLabel: "Recipes",
            tabBarLabelStyle: { color: "#008E97" },
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <AntDesign
                  name="shoppingcart"
                  size={24}
                  color={focused ? "#008E97" : "black"}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecipeDetails"
        component={RecipeDetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;

const styles = StyleSheet.create({});
