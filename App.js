import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/auth/PatientLogin";
import PreLoginScreen from "./screens/auth/PreLogin";
import AdminLoginScreen from "./screens/auth/AdminLogin";
import RegisterScreen from "./screens/auth/Register";
import VerificationComponent from "./screens/auth/Verify";
import ViewResultScreen from "./screens/ViewResult";
import DashboardScreen from "./screens/admin/Dashboard";
import ViewPatientScreen from "./screens/admin/ViewPatient";
import StartTestScreen from "./screens/admin/StartTest";
import VendorsScreen from "./screens/Vendors";
import ViewVendorScreen from "./screens/ViewVendor";
import CreateAppointmentsScreen from "./screens/CreateAppointments";
import ViewAppointmentsScreen from "./screens/admin/ViewAppointment";
import CartScreen from "./screens/Cart";
import CheckoutScreen from "./screens/Checkout";
import GettingStarted from "./screens/GettingStarted";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GettingStarted"
          options={{ headerShown: false }}
          component={GettingStarted}
        />
        <Stack.Screen
          name="PreLogin"
          options={{ headerShown: false }}
          component={PreLoginScreen}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="AdminLogin"
          options={{ headerShown: false }}
          component={AdminLoginScreen}
        />
        <Stack.Screen
          name="Register"
          options={{ headerShown: false }}
          component={RegisterScreen}
        />
        <Stack.Screen
          name="Verify"
          options={{ headerShown: false }}
          component={VerificationComponent}
        />

        <Stack.Screen
          name="Cart"
          options={{ headerShown: false }}
          component={CartScreen}
        />

        <Stack.Screen
          name="CreateAppointments"
          options={{ headerShown: false }}
          component={CreateAppointmentsScreen}
        />

        <Stack.Screen
          name="Checkout"
          options={{ headerShown: false }}
          component={CheckoutScreen}
        />

        <Stack.Screen
          name="ViewResult"
          options={{ headerShown: false }}
          component={ViewResultScreen}
        />
        <Stack.Screen
          name="ViewPatient"
          options={{ headerShown: false }}
          component={ViewPatientScreen}
        />
        <Stack.Screen
          name="StartTest"
          options={{ headerShown: false }}
          component={StartTestScreen}
        />
        <Stack.Screen
          name="ViewAppointments"
          options={{ headerShown: false }}
          component={ViewAppointmentsScreen}
        />
        <Stack.Screen
          name="Admin"
          options={{ headerShown: false }}
          component={DashboardScreen}
        />
        <Stack.Screen
          name="ViewVendor"
          options={{ headerShown: false }}
          component={ViewVendorScreen}
        />
        <Stack.Screen
          name="Vendors"
          options={{ headerShown: false }}
          component={VendorsScreen}
        />
        <Stack.Screen
          name="Root"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
