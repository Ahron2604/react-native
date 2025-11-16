import { StyleSheet, Text, ScrollView } from 'react-native';


import ActivityIndicatorComp from './src/Activityindicator';
import ButtonComp from './src/Button';
import FlatListComp from './src/Flatlist';
import ImageBackgroundComp from './src/imagebackground';
import KeyboardAvoidingViewComp from './src/keyboardavoidingview';
import ModalComp from './src/modal';
import PressableComp from './src/pressable';
import RefreshControlComp from './src/refreshcontrol';
import ScrollViewComp from './src/scrollview';
import SectionListComp from './src/sectionlist';
import StatusBarComp from './src/statusbar';
import SwitchComp from './src/switch';
import TextComp from './src/text';
import TextInputComp from './src/textinput';
import TouchableHighlightComp from './src/touchablehighlight';
import TouchableOpacityComp from './src/touchableopacity';
import TouchableWithoutFeedbackComp from './src/touchablewithoutfeedback';
import ViewComp from './src/view';
import VirtualizedListComp from './src/virtualizedlist';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>REACT NATIVE</Text>

      <ActivityIndicatorComp />
      <ButtonComp />
      <FlatListComp />
      <ImageBackgroundComp />
      <KeyboardAvoidingViewComp />
      <ModalComp />
      <PressableComp />
      <RefreshControlComp />
      <ScrollViewComp />
      <SectionListComp />
      <StatusBarComp />
      <SwitchComp />
      <TextComp />
      <TextInputComp />
      <TouchableHighlightComp />
      <TouchableOpacityComp />
      <TouchableWithoutFeedbackComp />
      <ViewComp />
      <VirtualizedListComp />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2b282831',
    paddingVertical: 50,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
