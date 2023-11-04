import React from 'react';
import {StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import fonts from '../../assets/fonts';
import IMAGES from '../../assets/Images/index';
import constants from '../../assets/Constants/constants';

const createStyleSheet = () => {
  return StyleSheet.create({
    headerTitleStyle: {
      fontSize: 16,
      fontFamily: fonts.PoppinsRegular,
      fontWeight: 500,
      color: '#202C43',
      lineHeight: 20,
    },
    iconCross: {
      position: 'absolute',
      right: 40,
      top: 56,
      zIndex: 1,
      height: 30,
      width: 30,
    },
    iconSearch: {position: 'absolute', left: 40, top: 54, zIndex: 1},
    inputStyle: {
      flex: 1,
      height: 52,
      borderColor: '#000',
      borderRadius: 30,
      marginHorizontal: 16,
      paddingLeft: 50,
      backgroundColor: '#EFEFEF',
    },
  });
};

const SearchBar = props => {
  const {handleSearchBar, searchText, onChangeText, onSubmitEditing} = props;
  const styles = createStyleSheet();

  return (
    <>
      <Image source={IMAGES.iconSearch} style={styles.iconSearch} />
      <TextInput
        style={styles.inputStyle}
        placeholder={constants.TV_SHOW_AND_MORE}
        onChangeText={onChangeText}
        value={searchText}
        onSubmitEditing={() => onSubmitEditing(true)}
      />
      <TouchableOpacity
        onPress={() => {
          handleSearchBar(false);
        }}
        style={styles.iconCross}>
        <Image source={IMAGES.iconCross} />
      </TouchableOpacity>
    </>
  );
};

SearchBar.propTypes = {
  handleSearchBar: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
};

export default SearchBar;
