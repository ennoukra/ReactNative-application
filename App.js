import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Task from "./component/Tasks";

export default function App() {
    return (
        <View style={styles.container}>
            {/* Today's taskes */}
            <View style={styles.taskesWrapper}>
                <Text style={styles.sectionTitle}>Today's Taskes</Text>
            </View>
            <View style={styles.items}>
                <Task text={"task 1"} />
                <Task text={"task 1"} />
                <Task text={"task 1"} />
            </View>
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
    items: {},
});
