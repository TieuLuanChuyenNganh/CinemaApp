import React, { Element } from 'react'

import {
  BackAndroid,
  Text,
  Navigator
} from 'react-native';



import { Router, Scene, Reducer, ActionConst, Modal, Actions, TabBar } from 'react-native-router-flux';
// import { connect } from 'react-redux';
import ScreenTabHome from '../components/TabHome/HomeScreen';
import ScreenTabMore from '../components/TabMore/MoreScreen';
// import ScreenTabMovie from '../components/TabMovie/MovieScreen';
import ScreenTabMovie from '../components/TabMovie/MovieInformation';
import ScreenTabCinema from '../components/TabCinema/CinemaScreen';

// const RouterWithRedux = connect()(Router);
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
  )
}
const scenes = Actions.create(
  <Scene key="modal" component={Modal} >
    <Scene key='root'>
      <Scene
        //initial={true}
        key={"HOMME"}
        tabs={true}
        // animation={null}
        // hideNavBar={true}
        panHandlers={null}
        hideNavBar={true}
        // animationStyle={null}
        tabBarPosition="bottom"
        tabBarStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
      >
        <Scene panHandlers={null} key={"tab_home"} title={"Home"} icon={TabIcon} component={ScreenTabHome} initial />
        <Scene panHandlers={null} key={"tab_movie"} title={"Movie"} icon={TabIcon} component={ScreenTabMovie} initial />
        <Scene panHandlers={null} key={"tab_cinema"} title={"Cinema"} icon={TabIcon} component={ScreenTabCinema} initial />
        <Scene panHandlers={null} key={"tab_more"} title={"More"} icon={TabIcon} component={ScreenTabMore} />
      </Scene>
    </Scene>

  </Scene>

)
const getSceneStyle = () => ({
  flex: 1,
  backgroundColor: 'transparent',
})

export default (): Element => (
  <Router
    hideNavBar={true}
    getSceneStyle={getSceneStyle}
    // backAndroidHandler={backAndroidHandler}
    scenes={scenes}
    animation={null}
    animationStyle={null}
    duration={100}
  >
  </Router>

)