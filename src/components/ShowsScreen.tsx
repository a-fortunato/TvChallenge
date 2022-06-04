import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TVEventControl,
  BackHandler,
} from 'react-native';
import ShowItem from './ShowItem';
import {useMobxStateTree} from '../stores';

const ShowsScreen = observer(() => {
  const {shows, isTextShowing, setTextVisible, focusedShowTitle} =
    useMobxStateTree();

  useEffect(() => {
    TVEventControl.enableTVMenuKey();

    const backAction = () => {
      if (isTextShowing) {
        setTextVisible(false, focusedShowTitle);
        return true;
      } else {
        BackHandler.exitApp();
        return false;
      }
    };

    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => {
      TVEventControl.disableTVMenuKey();
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTextShowing, focusedShowTitle]);

  return (
    <SafeAreaView style={styles.container}>
      {shows.map(show => (
        <ShowItem
          key={show.title}
          title={show.title}
          image={show.picture}
          description={show.description}
          isFocused={show.isFocused}
          setFocused={show.setFocused}
          isTextVisible={show.isTextVisible}
          setTextVisible={show.setTextVisible}
        />
      ))}
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    backgroundColor: '#FADFB0',
  },
});

export default ShowsScreen;
