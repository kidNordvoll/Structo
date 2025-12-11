import { View, Text } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-paper";

const Home = () => {

    const [length, setLength] = useState(0);
    const [width, setWidth] = useState(0);
    const [centerCenter, onChangeCenterCenter] = useState('');

    const handleLengthChange = (value: string) => {

        const length = value === "" ? 0 : parseFloat(value);
        setLength(length);
    }

    const handleWidthChange = (value: string) => {
        const width = value === "" ? 0 : parseFloat(value);
        setWidth(width);
    }

    return (
        <View>
            <TextInput
            style={{ height: 40, width: 120 }}
            label="Length"
            value={length.toString()} multiline={false} 
            onChangeText={handleLengthChange} keyboardType="numeric" mode="outlined"/>
            <TextInput
            style={{ height: 40, width: 120 }}
            label="Width"
            value={width.toString()} multiline={false} 
            onChangeText={handleWidthChange} keyboardType="decimal-pad" mode="outlined"/>
            <TextInput
            style={{ height: 40, width: 120 }}
            label="C/C"
            value={centerCenter} multiline={false}
            onChangeText={onChangeCenterCenter} keyboardType="numeric" mode="outlined"/>

            <Text>Length: {length}</Text>
            <Text>Width: {width}</Text>
            <Text>Area: {length * width}</Text>
        </View>
    )
}

export default Home;