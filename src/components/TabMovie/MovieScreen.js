import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,Navigator,
    View, Button, onPressLearnMore, TouchableOpacity,Dimensions,
} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
export default class MovieScreen extends Component {

   

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "white" }} >
                <View style={styles.header}>
                    <TouchableOpacity style={styles.DangChieuStyle}>
                        <Text style={{ color: "white" }}>Đang Chiếu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.SapChieuStyle}>
                        <Text style={{ color: "white" }}>Sắp Chiếu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.XepHangStyle}>
                        <Text style={{ color: "white" }}>Xếp Hạng</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={{ flex: 1 }}>
                        <View style={{ flex: 1, backgroundColor: 'white' }}>


                        </View>
                    </TouchableOpacity>
                    <View style={{ flex: 2 }}>
                        <Text>phan hien thi ten phim vaf cac rap chieu phim</Text>
                    </View>
                </View>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    header: {
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flex: 1,
        backgroundColor: "red"
        // justifyContent:"dfd"
    },
    container: {
        flex: 15,
        backgroundColor: "gray"
    },
    DangChieuStyle: {
        paddingVertical: 5,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "red",
        borderWidth: 1,
        borderColor: '#fff',
    },
    SapChieuStyle: {
        paddingVertical: 5,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "red",
        borderWidth: 1,
        borderColor: '#fff',
    },
    XepHangStyle: {

        paddingVertical: 5,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "red",
        borderWidth: 1,
        borderColor: '#fff',

    },

});
