import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Image, TouchableOpacity, ScrollView
} from 'react-native';

export default class MovieInformation extends Component {
    render() {
        return (
            <View style={{ flex: 1, }}>
                <View style={styles.TabBar}>
                    <TouchableOpacity style={{ flex: 1 }}>

                    </TouchableOpacity>

                    <Text style={{ flex: 10, color: '#fff', fontSize: 20, justifyContent: 'center', alignItems: 'center', }}> Thông Tin Phim</Text>
                    <TouchableOpacity style={{ flex: 1 }}>

                    </TouchableOpacity>
                </View>


                <View style={styles.Trailer}>

                    <Text> trailer</Text>

                </View>


                <View style={styles.information}>
                    <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                        <Text>
                            Cuộc chiến cuối cùng
                        </Text>
                    </View>

                    <View style={{ flex: 3, margin: 10 }}>
                        <View style={{ flexDirection: "row", }}>
                            <Text style={{ flex: 1 }}>Đạo diễn bộ phim</Text>
                            <Text style={{ flex: 1 }}>Nguyễn văn A</Text>
                        </View>

                        <View style={{ flexDirection: "row", }}>
                            <Text style={{ flex: 1 }}>Diễn viên</Text>
                            <Text style={{ flex: 1 }}>Nguyễn văn B</Text>
                        </View>

                        <View style={{ flexDirection: "row", }}>
                            <Text style={{ flex: 1 }}>Thể loại </Text>
                            <Text style={{ flex: 1 }}>Hành động</Text>
                        </View>

                        <View style={{ flexDirection: "row", }}>
                            <Text style={{ flex: 1 }}>Thời lượng</Text>
                            <Text style={{ flex: 1 }}>2h</Text>
                        </View>


                        <View style={{ flexDirection: "row", }}>
                            <Text style={{ flex: 1 }}> Ngay Công chiếu</Text>
                            <Text style={{ flex: 1 }}>30/9/2017</Text>
                        </View>
                    </View>


                    <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', }}>
                        <Text>
                            Nội dung
                        </Text>
                    </View>


                    <View style={{ flex: 4, margin: 10 }}>
                        <ScrollView>
                            <Text>
                                nội dung tóm tắt về toàn bộ thông tin bộ phim


                        </Text>
                        </ScrollView>
                    </View>

                </View>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    TabBar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        flexDirection: "row",

    },
    Trailer: {
        flex: 5,
        backgroundColor: 'gray',
    },
    information: {
        flex: 10,
        backgroundColor: 'white',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10
    }
});