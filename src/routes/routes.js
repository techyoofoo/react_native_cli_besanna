import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from '../components/login';
import AppScanner from "../components/app-scanner";
import ForgotPasswordScreen from "../components/forgot-password";
import ActivateScanner from "../components/scanner-activation";
import PersonalizePerference from "../components/personalize-preference";
import MyAccountScreen from "../components/my-account";
import ScanningMenu from "../components/scanning-menu";
import SelfScanScreen from "../components/scan-menu/self-scan";
import ScanAFriend from "../components/scan-menu/scan-friend";
import ScanReport from "../components/scan-report";

const Routes = createDrawerNavigator({
    LoginScreen: {
        screen: LoginScreen,
    },
    AppScanner: {
        screen: AppScanner,
    },
    ForgotPasswordScreen: {
        screen: ForgotPasswordScreen
    },
    ActivateScanner: {
        screen: ActivateScanner
    },
    PersonalizePerference: {
        screen: PersonalizePerference
    },
    MyAccountScreen: {
        screen: MyAccountScreen
    },
    ScanningMenu: {
        screen: ScanningMenu
    },
    SelfScanScreen:{
        screen:SelfScanScreen
    },
    ScanAFriend:{
        screen: ScanAFriend
    },
    ScanReport:{
        screen: ScanReport
    }
},
    {
        initialRouteName: "LoginScreen"
    });

const AppContainer = createAppContainer(Routes);

export default AppContainer;