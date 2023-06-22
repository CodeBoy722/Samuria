
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useSelector, useDispatch } from 'react-redux'
import { onPageSelected } from '../states/reducers';
import { RootState } from '../states/store';


const AppPager = () => {
  const pagerPosition = useSelector((state: RootState) => state.pageIndicator.value)
  const dispatch = useDispatch()
  dispatch(onPageSelected(2))

    return (
      <View style={{ flex: 1 }}>
        <PagerView style={styles.viewPager} initialPage={pagerPosition} onPageSelected={(pos) => {onPageSelected(pos)}}>
          <View style={styles.page} key="1">
            <Text>First page</Text>
            <Text>Swipe ➡️</Text>
          </View>
          <View style={styles.page} key="2">
            <Text>Second page</Text>
          </View>
          <View style={styles.page} key="3">
            <Text>Third page</Text>
          </View>
        </PagerView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    viewPager: {
      flex: 1,
    },
    page: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default AppPager;


