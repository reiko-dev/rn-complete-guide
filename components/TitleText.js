import React from 'react';

import { Text, StyleSheet } from 'react-native';

const TitleText = props => {
    return (
        <Text
            style={{ ...styles.title, ...props.style }}
        >
            {props.children}
        </Text>
    )
};

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontFamily: 'open-sans-bold',
        fontSize: 20,
    },
})

export default TitleText;
