import { View, Text, TextInput } from "react-native";
import { useState } from "react";

const Home = () => {

    const [length, setLength] = useState(0);

    const handleLengthChange = (value: string) => {
        const length = parseFloat(value);
        setLength(length);
    }

    return (
        <View>
            <Text>Home</Text>
            <TextInput onChangeText={handleLengthChange} keyboardType="numeric" />
            <Text>Length: {length}</Text>
        </View>
    )
}

export default Home;