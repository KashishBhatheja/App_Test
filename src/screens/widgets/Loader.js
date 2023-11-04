import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    zIndex: 100,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Loader = props => {
  const {size, isSmallLoader, activityIndicatorStyle, color} = props;
  return isSmallLoader ? (
    <ActivityIndicator
      style={activityIndicatorStyle}
      size={size}
      color={color}
    />
  ) : (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={'#2E2739'} />
    </View>
  );
};
Loader.defaultProps = {
  size: 'small',
  color: '#2E2739',
};
Loader.propTypes = {
  size: PropTypes.string,
  isSmallLoader: PropTypes.bool.isRequired,
  activityIndicatorStyle: PropTypes.object.isRequired,
  color: PropTypes.string,
};

export default Loader;
