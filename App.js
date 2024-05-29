import React, { useState, useContext, useEffect } from "react";
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

import AsyncStorage from "@react-native-async-storage/async-storage";

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
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={RegisterScreen}
      />
    </AuthStack.Navigator>
  );
}


function AdminFlow() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Admin"
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
        name="ViewAppointments"
        component={ViewAppointmentsScreen}
      />
    </Stack.Navigator>
  );
}

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
  const { state, update} = useContext(AuthContext);
  useEffect(()=> {
    console.log({nn: state})
    if (!state?.token) {
      update()
    }
  }, [state?.token])
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          state?.token == null ? (
              <Stack.Screen
                options={{ headerShown: false }}
                name="Auth"
                component={AuthFlow}
              />
          ) :
            state?.token && state?.user?.expand?.role?.name == "admin" ? (
              <Stack.Screen
                options={{ headerShown: false }}
                name="AdminMain"
                component={AdminFlow}
              />
            ) : (
              <Stack.Screen
                options={{ headerShown: false }}
                name="Main"
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
