import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from "./src/context/AuthContext";
import StackRoutes from "./src/routes/stack.routes";

export default function App() {
  const toastConfig = {
    success: ({ text1, text2, ...rest }) => (
      <View style={styles.toastContainer}>
        <Text style={styles.toastText}>{text1}</Text>
        <Text style={styles.toastText}>{text2}</Text>
      </View>
    ),
  };

  return (
    <NavigationContainer>
      <AuthProvider>
        <StackRoutes />
        <Toast
          config={toastConfig}
          position="bottom"
          autoHide
          visibilityTime={5000}
        />
      </AuthProvider>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent("YourApp", () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  toastContainer: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  toastText: {
    color: "white",
  },
});
