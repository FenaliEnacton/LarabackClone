import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { Toast } from '@components/core';
import { NavigationContainer } from '@react-navigation/native';
//import NetInfo from '@react-native-community/netinfo';
import { translate } from '@translations';
import { createStackNavigator } from '@react-navigation/stack';
import { CommonActions } from '@react-navigation/native';
import NavBar from '../Components/navBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from '../Screens/Welcome'
import SocialLogin from '../Screens/Auth/SocialLogin';
import Login from '../Screens/Auth/index'
import ForgetPassword from '../Screens/Auth/ForgetPassword'
import SignUp from '../Screens/Auth/SignUp';
import FavBrand from '../Screens/FavBrand'
import Success from '../Screens/Success'
import Home from '../Screens/Home'
import StoreInfo from '../Screens/StoreInfo'
import Search from '../Screens/Search'
import Profile from '../Screens/Profile'

import CashBackActivities from '../Screens/CashbackActivities'
import CategoryDetails from '../Screens/CategoryDetails'

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const MainStack = createStackNavigator();

export const navigationRef = React.createRef();
export const isReadyRef = React.createRef();

export function navigate(name, params) {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    // // console.log('navigation failed');
  }
}

export function reset(...args) {
  navigationRef.current?.dispatch(CommonActions.reset(...args));
}

export function go_back() {
  navigationRef.current?.dispatch(CommonActions.goBack());
}

const mapDispatchToProps = {
  //setReferralCode,
};

const mapStateToProps = state => {
  return {
    //loading: state.loading,
  };
};

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      tabBar={props => <NavBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen name="Profile" component={Profile} />

    </Tab.Navigator>
  );
}

class AppNavigator extends Component {
  state = {
    lastBack: null,
  };

  componentDidMount() {
    // NetInfo.addEventListener(state => this.handleConnectivityChange(state));
    // OneSignal.setAppId(Config.OneSignalKey);
    // OneSignal.setNotificationOpenedHandler(notification => {
    //   console.log('OneSignal: notification opened:', notification);
    //   navigate('Dashboard');
    // });
    // OneSignal.setInAppMessageClickHandler(event => {
    //   console.log('OneSignal IAM clicked:', event);
    //   navigate('Dashboard');
    // });
    //deeplinking
    // Linking.addEventListener('url', this.handle_deep_link_URL);
    // Linking.getInitialURL()
    //   .then(url => {
    //     if (url) {
    //       setTimeout(() => {
    //         this.handle_deep_link_URL(url);
    //       }, 6000);
    //     }
    //   })
    //   .catch(err => console.error('An error occurred', err));
    // dynamicLinks()
    //   .getInitialLink()
    //   .then(link => {
    //     this.handleDynamicLink(link);
    //   });
    // dynamicLinks().onLink(this.handleDynamicLink);

    BackHandler.addEventListener('hardwareBackPress', () => {
      if (navigationRef.current) {
        let lastBack = this.state.lastBack;
        let currentTime = new Date().getTime();
        if (!!lastBack && lastBack + 10 * 1000 > currentTime) {
          return;
        } else {
          Toast.showBottom('Press back again to Exit');
        }
        this.setState({ lastBack: currentTime });
        return true;
      } else {
        BackHandler.exitApp();
      }
      return true;
    });
  }

  // handleConnectivityChange = ({ isConnected }) => {
  //   if (isConnected) {
  //     this.setState({ isConnected });
  //   } else {
  //     // this.setState({ isConnected });
  //     navigate('NoInternet');
  //   }
  // };

  componentWillUnmount() {
    isReadyRef.current = false;
    // Linking.removeEventListener('url', this.handle_deep_link_URL);
    // const unsubscribe = dynamicLinks().onLink(this.handleDynamicLink);
    // return unsubscribe;
  }

  // handleDynamicLink = link => {
  //   // Handle dynamic link inside your own application
  //   console.log(link);
  //   if (link.url === Config.WEB_URL) {
  //   }
  // };

  // handleDynamicLink = async link_obj => {
  //   let url = link_obj.url ? link_obj.url : link_obj;
  //   let extracted_link = url.replace(Config.DEEP_LINK_URL, '');
  //   let link_data = [];
  //   if (extracted_link.includes('?refer=')) {
  //     link_data = extracted_link.split('?refer=');
  //     const value = await AsyncStorage.getItem('@user_data');
  //     if (value !== null) {
  //       let data = JSON.parse(value);
  //       if (data) {
  //         Toast.showBottom(translate('you_are_already_logged_in'));
  //       }
  //     } else {
  //       navigate('Login', { referrer_code: link_data[1] });
  //       this.props.setReferralCode(link_data[1]);
  //     }
  //   }
  // };

  render() {
    return (
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true;
        }}>
        {/* <StatusBar hidden /> */}
        <MainStack.Navigator
          screenOptions={{
            headerShown: false
          }}
          headerMode="none"
          initialRouteName={'Welcome'}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="SocialLogin" component={SocialLogin} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="FavBrand" component={FavBrand} />
          <Stack.Screen name="Success" component={Success} />
          <Stack.Screen name="Home" component={MyTabs} />
          <Stack.Screen name="StoreInfo" component={StoreInfo} />
          <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
          <Stack.Screen name="CashBackActivities" component={CashBackActivities} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        </MainStack.Navigator>
      </NavigationContainer>
    );
  }
}
export default AppNavigator;
