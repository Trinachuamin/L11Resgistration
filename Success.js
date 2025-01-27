import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const Success = ({ navigation }) => {
    return (
        <ImageBackground
            source={{
                uri: 'https://img.freepik.com/premium-photo/generative-ai-retro-audio-microphone-stage-blurred-lights-background_93150-16466.jpg',
            }}
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.title}>🎉 Registration Successful! 🎉</Text>
                <Text style={styles.message}>
                    Thank you for registering for StarVoice! We look forward to hearing your voice.
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.buttonText}>Back to Home</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        elevation: 5,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 20,
    },
    message: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
        marginBottom: 40,
        lineHeight: 22,
    },
    button: {
        backgroundColor: '#FFCC99', // Soft orange shade
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default Success;
