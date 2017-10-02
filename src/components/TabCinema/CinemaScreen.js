import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

// import ModalDropdown from 'react-native-modal-dropdown';
import ModalDropdown from 'react-native-modal-dropdown';

const DEMO_OPTIONS_1 = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7', 'option 8', 'option 9'];
const DEMO_OPTIONS_2 = [
    { "name": "Rex", "age": 30 },
    { "name": "Mary", "age": 25 },
    { "name": "John", "age": 41 },
    { "name": "Jim", "age": 22 },
    { "name": "Susan", "age": 52 },
    { "name": "Brent", "age": 33 },
    { "name": "Alex", "age": 16 },
    { "name": "Ian", "age": 20 },
    { "name": "Phil", "age": 24 },
];

export default class Cinema extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdown_4_options: null,
            dropdown_4_defaultValue: 'loading...',
            dropdown_6_icon_heart: true,
        };
    }

    render() {
        let dropdown_6_icon = this.state.dropdown_6_icon_heart ? require('./heart.png') : require('./flower.png');
        return (
            <View style={styles.container}>

                <ModalDropdown style={styles.dropdown_2}
                    textStyle={styles.dropdown_2_text}
                    dropdownStyle={styles.dropdown_2_dropdown}
                    options={DEMO_OPTIONS_2}
                    renderRow={this._dropdown_2_renderRow.bind(this)}
                    renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this._dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
                />
            </View>
        );
    }

    _dropdown_2_renderRow(rowData, rowID, highlighted) {
        let icon = highlighted ? require('./heart.png') : require('./flower.png');
        let evenRow = rowID % 2;
        return (
            <TouchableHighlight underlayColor='cornflowerblue'>
                <View style={[styles.dropdown_2_row, { backgroundColor: evenRow ? 'lemonchiffon' : 'white' }]}>
                    <Image style={styles.dropdown_2_image}
                        mode='stretch'
                        source={icon}
                    />
                    <Text style={[styles.dropdown_2_row_text, highlighted && { color: 'mediumaquamarine' }]}>
                        {`${rowData.name} (${rowData.age})`}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }

    _dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        if (rowID == DEMO_OPTIONS_1.length - 1) return;
        let key = `spr_${rowID}`;
        return (<View style={styles.dropdown_2_separator}
            key={key}
        />);
    }

}

const styles = StyleSheet.create({

    dropdown_2: {
        alignSelf: 'flex-end',
        width: 150,
        top: 32,
        right: 8,
        borderWidth: 0,
        borderRadius: 3,
        backgroundColor: 'cornflowerblue',
    },
    dropdown_2_text: {
        marginVertical: 10,
        marginHorizontal: 6,
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    dropdown_2_dropdown: {
        width: 150,
        height: 300,
        borderColor: 'cornflowerblue',
        borderWidth: 2,
        borderRadius: 3,
    },
    dropdown_2_row: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
    },
    dropdown_2_image: {
        marginLeft: 4,
        width: 30,
        height: 30,
    },
    dropdown_2_row_text: {
        marginHorizontal: 4,
        fontSize: 16,
        color: 'navy',
        textAlignVertical: 'center',
    },
    dropdown_2_separator: {
        height: 1,
        backgroundColor: 'cornflowerblue',
    },

});