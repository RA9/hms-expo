import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, createStackNavigator } from "@react-navigation/native-stack";
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

import { Provider as AuthProvider } from './context/AuthContext.js';
import { Context as AuthContext } from './context/AuthContext';

const Stack = createNativeStackNavigator();

const AuthStack = createNativeStackNavigator();

function AuthFlow() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="GettingStarted"
        component={GettingStarted}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="PreLogin"
        component={PreLoginScreen}
      />
      <AuthStack.Screen
        name="AdminLogin"
        options={{ headerShown: false }}
        component={AdminLoginScreen}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
    </AuthStack.Navigator>
  );
}

{/* <Stack.Navigator>
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
</Stack.Navigator> */}

function HomeFlow() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ViewResult"
        component={ViewResultScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Dashboard"
        component={DashboardScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ViewPatient"
        component={ViewPatientScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="StartTest"
        component={StartTestScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Vendors"
        component={VendorsScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ViewVendor"
        component={ViewVendorScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="CreateAppointments"
        component={CreateAppointmentsScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ViewAppointments"
        component={ViewAppointmentsScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Cart"
        component={CartScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Checkout"
        component={CheckoutScreen}
      />
    </Stack.Navigator>
  );
}


function App() {
  const { state } = useContext(AuthContext);
  console.log(state);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {state.token === null ? (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Auth"
              component={AuthFlow}
            />
          </>
        ) : (
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeFlow}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
