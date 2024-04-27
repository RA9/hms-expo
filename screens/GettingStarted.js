import React, { useCallback, useEffect } from "react";

import { View, Text, Pressable, StyleSheet, ImageBackground } from "react-native";
import { styled } from "nativewind";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Image } from "expo-image"


const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImageBackground = styled(ImageBackground);
const StyledImage = styled(Image);
function GettingStarted() {
    const [info, setInfo] = React.useState([
        {
            title: "Let our nurses come to you wherever you are at your convenient time.",
            image: require("../assets/2.png")
        },
        {
            title: "Buy medication from any of our online stores and have it delivered to you in no time.",
            image: require("../assets/1.png")
        },
        {
            title: "Have a regular health check every month.",
            image: require("../assets/3.png")
        }

    ]);
    const [isSlideCompleted, setIsSlideCompleted] = React.useState(false);
    const [isNext, setIsNext] = React.useState(false);


    const [index, setIndex] = React.useState(0);
    const navigation = useNavigation();

    useEffect(() => {
        if (index > 0) {
            setIsNext(true);
        } else {
            setIsNext(false);
        }
    }, [index]);

    useEffect(() => {
        if (index === (info.length - 1)) {
            setIsSlideCompleted(true);
        } else {
            setIsSlideCompleted(false);
        }
    }, [index]);


    const [fontsLoaded, fontError] = useFonts({
        'Rubik': require("../assets/Rubik-VariableFont_wght.ttf")
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    function next() {

        if (index === (info.length - 1)) {
            return;
        }
        setIndex((index) => index + 1);
    }

    function previous() {
        if (index === 0) {
            return;
        }
        setIndex((index) => index - 1);
    }



    
    const blurhash =
        '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    return (
        <StyledView>
            <StatusBar style="auto" />
            <StyledView className="bg-white flex items-center py-24 px-2">
                <StyledImage source={
                    info[index].image
                }
                    style={{
                        width: 400,
                        height: 400,
                    }}
                    placeholder={blurhash}
                    contentFit="cover"
                    transition={1000}
                />
            </StyledView>
            <StyledView className="bg-[#084C56] min-h-[500px] py-4 font-['Rubik'] rounded-3xl shadow">
                <StyledView className="px-2 py-8 m-0">
                    <StyledText className="text-white text-center text-2xl font-bold">{info[index].title}</StyledText>
                </StyledView>

                {
                    !isSlideCompleted ? (
                        <StyledView className="p-4 py-8 flex flex-row items-center justify-center gap-4 mx-2">
                            {
                                isNext ? (
                                    <Pressable className="w-1/2 bg-zinc-900 py-4 px-4 rounded-md" onPress={() => previous()}>
                                        <StyledText className="text-center text-md font-medium text-white font-bold">Previous</StyledText>
                                    </Pressable>
                                ) : (
                                   <StyledView className="w-1/2"></StyledView>
                                )
                            }
                            <Pressable className="w-1/2 bg-white py-4 px-4 rounded-md" onPress={() => next()}>
                                <StyledText className="text-center text-md font-medium text-[#303080] font-bold">Next</StyledText>
                            </Pressable>
                        </StyledView>
                    ) : (
                        <StyledView className="p-4 py-8 flex flex-row items-center justify-center gap-4 mx-2">
                            <Pressable className="w-full bg-[#14c0d8] py-4 px-4 rounded-md" onPress={() => navigation.navigate("PreLogin")}>
                                <StyledText className="text-center text-md font-medium text-white font-bold">Get Started</StyledText>
                            </Pressable>
                        </StyledView>
                    )
                }

            </StyledView>
        </StyledView>
    );
}


export default GettingStarted;