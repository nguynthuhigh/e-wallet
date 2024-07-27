import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, useWindowDimensions, Image, Button, TouchableOpacity } from 'react-native';

const OnboardingItem = ({ item, onButtonPress }) => {
    const { width } = useWindowDimensions();

    return (
        <View style={[styles.container, { width }]}>
            <Image
                source={item.image1}
                style={styles.image1}
                resizeMode="contain"
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title1}</Text>
                <Text style={styles.title}>{item.title2}</Text>
            </View>
            <Image
                source={item.image2}
                style={styles.image2}
                resizeMode="contain"
            />
            <View style={styles.buttonContainer}>
                {item.id === '1' && 
                    <TouchableOpacity onPress={() => onButtonPress(item.id)} className="w-full">
                    <View className="px-20  bg-[#0094FF] h-[60px] flex-row items-center justify-center rounded-full">
                      <Text className="text-white text-[20px] font-bold">
                        Tiếp tục
                      </Text>
                    </View>
                  </TouchableOpacity>
                }
                {item.id === '2' && 
                    <TouchableOpacity onPress={() => onButtonPress(item.id)} className="w-full">
                    <View className="px-20  bg-[#0094FF] h-[60px] flex-row items-center justify-center rounded-full">
                      <Text className="text-white text-[20px] font-bold">
                        Tiếp tục
                      </Text>
                    </View>
                  </TouchableOpacity>
                }
                {item.id === '3' && 
                        <Link href="/welcome">
                        <View className='px-[70px] py-4 rounded-[999px] bg-[#0094ff]'>
                            <Text className='text-white text-[20px]'>Bắt đầu</Text>
                        </View>
                    </Link>
                }
            </View>
        </View>
    );
};

export default OnboardingItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image1: {
        width: 300,
        height: 300,
        resizeMode: 'contain'
    },
    image2: {
        resizeMode: 'contain',
        marginTop: 25,
        marginBottom: 10,
    },
    textContainer: {
        marginTop: 80,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: 20,
    },
});
