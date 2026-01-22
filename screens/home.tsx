import { View, Text } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Home = () => {

    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");
    const [centerCenter, setCenterCenter] = useState("60");

    // Convert strings to numbers for calculations
    const lengthNumber = parseFloat(length.replace(",", ".")) || 0;
    const widthNumber = parseFloat(width.replace(",", ".")) || 0;

    
    const handleLengthChange = (value: string) => {

        const periodCount = value.split(".").length - 1;
        if (periodCount <= 1) {   
            const cleaned = value.replace(/[^0-9.,]/g, "");
            setLength(cleaned);
        }
    }

    const handleWidthChange = (value: string) => {

        const periodCount = value.split(".").length - 1;
        if (periodCount <= 1) {   
            const cleaned = value.replace(/[^0-9.,]/g, "");
            setWidth(cleaned);
        }
    }

    const handleCenterCenterChange = (value: string) => {
        const cleaned = value.replace(/[^0-9.,]/g, "");
        setCenterCenter(cleaned);
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, justifyContent: 'center'}}>
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
                onChangeText={handleCenterCenterChange} keyboardType="numeric" mode="outlined"/>

                <Text>Length: {length}</Text>
                <Text>Width: {width}</Text>
                <Text>C/C: {centerCenter} cm</Text>
                <Text>Number of joists: {Math.floor(lengthNumber / parseFloat(centerCenter)) + 1}</Text>
                <Text>Area: {(lengthNumber * widthNumber) / 10000} m²</Text>
            
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Home;