import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import fonts from '../../assets/fonts';
import IMAGES from '../../assets/Images/index';
import SearchBar from './SearchBar';
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
    headerStyle: {
      backgroundColor: 'white',
      paddingHorizontal: 16,
      height: 111,
      alignItems: 'center',
      paddingTop: 32,
      flexDirection: 'row',
    },
    header: {
      backgroundColor: 'white',
      paddingHorizontal: 16,
      height: 111,
      alignContent: 'center',
      alignItems: 'center',
      paddingTop: 32,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    headerTitile: {
      fontFamily: fonts.PoppinsMedium,
      fontSize: 16,
      paddingHorizontal: 8,
    },
  });
};

const Header = props => {
  const {
    headerTitile,
    hasIconSearch,
    showSearchBar,
    handleSearchBar,
    searchText,
    onChangeText,
    onSubmitEditing,
    showResult,
  } = props;
  const styles = createStyleSheet();

  if (showResult) {
    return (
      <View style={styles.headerStyle}>
        <TouchableOpacity
          onPress={() => {
            handleSearchBar(false);
          }}>
          <Image source={IMAGES.iconBack} />
        </TouchableOpacity>
        <Text style={styles.headerTitile}>{constants.RESULT_FOUND}</Text>
      </View>
    );
  }

  return (
    <View style={styles.header}>
      {showSearchBar ? (
        <SearchBar
          handleSearchBar={handleSearchBar}
          searchText={searchText}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
      ) : (
        <>
          <Text style={styles.headerTitleStyle}>{headerTitile}</Text>
          {hasIconSearch && (
            <TouchableOpacity
              onPress={() => {
                handleSearchBar(true);
              }}>
              <Image source={IMAGES.iconSearch} />
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
};

Header.propTypes = {
  headerTitile: PropTypes.string.isRequired,
  hasIconSearch: PropTypes.bool.isRequired,
  showSearchBar: PropTypes.bool.isRequired,
  handleSearchBar: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
  showResult: PropTypes.bool.isRequired,
};

export default Header;
