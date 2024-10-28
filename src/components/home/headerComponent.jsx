import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import AppColors from '../../theme/color';
import {
  ArrowCircleRight2,
  ChartCircle,
  Clock,
  CloseCircle,
  TickCircle,
} from 'iconsax-react-native';

const HeaderComponent = () => {
  const tasks = [
    {
      id: 1,
      title: 'Ongoing',
      color: AppColors.ONGOING,
      icon: <ChartCircle size="32" color={AppColors.WHITE} />,
    },
    {
      id: 2,
      title: 'Pending',
      color: AppColors.PENDING,
      icon: <Clock size="32" color={AppColors.WHITE} />,
    },
    {
      id: 3,
      title: 'Complated',
      color: AppColors.COMPLATED,
      icon: <TickCircle size="32" color={AppColors.WHITE} />,
    },
    {
      id: 4,
      title: 'Cansel',
      color: AppColors.CANSEL,
      icon: <CloseCircle size="32" color={AppColors.WHITE} />,
    },
  ];

  const Task = ({item}) => {
    return (
      <Pressable
        style={{
          width: '45%',
          backgroundColor: item.color,
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}>
        {item.icon}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <View>
            <Text
              style={{
                color: AppColors.WHITE,
                fontSize: 14,
                fontWeight: '600',
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                color: AppColors.WHITE,
                fontSize: 16,
                fontWeight: '600',
                marginTop: 5,
              }}>
              {10} Task
            </Text>
          </View>

          <View>{<ArrowCircleRight2 size="32" color={AppColors.WHITE} />}</View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={tasks}
        renderItem={({item}) => <Task item={item} />}
      />
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
