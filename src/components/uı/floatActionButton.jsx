import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Add} from 'iconsax-react-native';

const FloatActionButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.continer}>
      <Add size="32" color="#fff" />
    </TouchableOpacity>
  );
};

export default FloatActionButton;

const styles = StyleSheet.create({
  continer: {
    backgroundColor: '#2CCCE4',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    borderRadius: 10000,
    position: 'absolute',
    right: 30,
    bottom: 30,
  },
});
