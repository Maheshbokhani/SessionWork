import React, {Component} from 'react';
import {} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import page1 from '..//screens/page1.js'
import page2 from  '..//screens/page2.js'

export default class Routerapp extends Component {
    render() {
        return (
         <Router>
            <Scene key="root">
              <Scene key="page1"
                component={page1}
                hideNavBar
                initial
              />
              <Scene
                key="page2"
                component={page2}
                hideNavBar
              />
         </Scene>
         </Router>
        )
    }
}