import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
    KeyboardAvoidingView,
    Platform,
    TextInput,
    TouchableOpacity,
} from "react-native-web";
import Task from "./component/Tasks";

export default function App() {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handelAddTask = () => {
        // keyboard.dismiss();
        setTaskItems([...taskItems, task]);
        setTask("");
    };

    const completTask = (index) => {
        let copyItems = [...taskItems];
        copyItems.splice(index, 1);
        setTaskItems(copyItems);
    };
    return (
        <View style={styles.container}>
            {/* Today's taskes */}
            <View style={styles.taskesWrapper}>
                <Text style={styles.sectionTitle}>Today's Taskes</Text>
            </View>
            <View style={styles.items}>
                {taskItems.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => completTask(index)}
                        >
                            <Task key={index} text={item} />
                        </TouchableOpacity>
                    );
                })}
                {/* <Task text={"task 1"} />
                <Task text={"task 1"} />
                <Task text={"task 1"} /> */}
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWraper}
            >
                <TextInput
                    style={styles.input}
                    placeholder={"Write a task"}
                    value={task}
                    onChangeText={(text) => setTask(text)}
                />
                <TouchableOpacity onPress={() => handelAddTask()}>
                    <View style={styles.addWraper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8EAED",
    },
    taskesWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
    items: {
        marginTop: 30,
    },
    writeTaskWraper: {
        position: "absolute",
        bottom: 60,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: "#FFF",
        borderRadius: 60,
        borderColor: "#C0C0C0",
        borderWidth: 1,
        width: 250,
    },
    addWraper: {
        width: 60,
        height: 60,
        backgroundColor: "#FFF",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#C0C0C0",
        borderWidth: 1,
    },
    addText: {},
});
