
import React, { Component } from 'react';
import {
    View,
    Text,
    Image, TouchableOpacity,
    StyleSheet, ListView
} from 'react-native';
// import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper'
import Dimensions from 'Dimensions';// lấy thông tin thiết bị
const { width } = Dimensions.get('window')
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
        };
    }
    render() {
        return (

            <View style={{ flex: 1 }}>

                <Swiper height={290}
                    dot={<View style={{ backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                    activeDot={<View style={{ backgroundColor: 'black', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                    autoplay={true}>
                    <View style={styles.slide}  >
                        <Text>AAA</Text>
                    </View>
                    <View style={styles.slide} >
                        <Image resizeMode='stretch' style={styles.image} source={require('../../images/p2.jpg')} >

                        </Image>
                    </View>
                    <View style={styles.slide} >
                        <Image resizeMode='stretch' style={styles.image} source={require('../../images/p3.jpg')} >

                        </Image>
                    </View>
                    <View style={styles.slide}>
                        <Image resizeMode='stretch' style={styles.image} source={require('../../images/p4.jpg')} >
                        </Image>
                    </View>
                    <View style={styles.slide}>
                        <Image resizeMode='stretch' style={styles.image} source={require('../../images/p5.jpg')} >
                        </Image>
                    </View>
                </Swiper>
                <ListView dataSource={this.state.dataSource}
                    renderRow={(row) =>
                        <TouchableOpacity >

                            <View style={styles.container1}>

                                <Image source={{ uri: row.Image }} style={styles.photo} />
                                <View style={styles.columcon}>
                                    <View style={{ width: width, height: 1, backgroundColor: '#CED9E1' }} />
                                    <Text style={styles.text1}>{row.Title}</Text>
                                    <Text style={styles.text2}> {row.Time}</Text>
                                    <View style={{ width: width, height: 1, backgroundColor: '#CED9E1', position: 'absolute', bottom: 0 }} />
                                </View>

                            </View>

                        </TouchableOpacity>
                    }
                >
                </ListView>
            </View>
        )
    }
    componentDidMount() {
        var mang = [new News("Xem phim Xả ga , Trúng ngay xe khủng", "https://previews.123rf.com/images/yuzach/yuzach1509/yuzach150900003/44651194-Realistic-cinema-movie-poster-template-with-film-reel-clapper-popcorn-3D-glasses-concept-banner-on-w-Stock-Vector.jpg", "22/9-05/10/2017"),
        new News("Ưu đãi Hoàng gia dành cho cư dân Times City ", "https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/d/o/dong-gia-240-x-201.jpg", "28/9-30/9/2017"),
        new News("Em chưa 23 ? giá chỉ 45k", "https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/u/2/u22---240-x-201_2.jpg", "2/9-20/9/2017"),
        new News("Rạp đỉnh quá giá chỉ 49k", "https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/4/240x201_3.jpg", "1/8-1/11/2017"),
        new News("Coupond ưu đãi tháng 8", "https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/a/cac_uu_dai_khac_2_tv_240_x_201.png", "1/8-31/8/2017"),

        ];
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(mang)

        })
    }


}
function News(title, image, time) {
    this.Title = title;
    this.Image = image;
    this.Time = time;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffcb05',
    },
    image: {
        width,
        backgroundColor: 'transparent',

    },
    photo: {
        height: 110,
        width: 130
    },
    columcon: {
        flex: 1,

        flexDirection: 'column',

    },
    container1: {
        flex: 1,
        padding: 0,
        flexDirection: 'row',
        backgroundColor: 'white'


    },
    text1: {
        paddingLeft: 8,
        paddingTop: 5,
        fontWeight: 'bold',
        fontSize: 19
    }
    ,
    text2: {
        marginTop: 45,
        textAlign: 'right',
        fontSize: 17
    }
    ,
    slide: {
        height: 250,
        width: 500,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    wrapper: {
    },

})
const mapStateToProps = (state) => {

    return {


    }
}
// export default connect(mapStateToProps)(HomeScreen)
export default HomeScreen;