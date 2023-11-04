import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';

export const createStyleSheet = () => {
  return StyleSheet.create({
    imageContainer: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      marginVertical: 12,
    },
    genreContainerStyle: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      marginVertical: 12,
      width: '48%',
    },
    searchContainerStyle: {
      flexDirection: 'row',
      marginBottom: 16,
    },
    textContainer: {
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'center',
    },
    primaryStyle: {
      fontSize: 16,
      fontFamily: fonts.PoppinsMedium,
      fontWeight: 500,
    },
    secondaryStyle: {
      fontSize: 12,
      fontFamily: fonts.PoppinsMedium,
      fontWeight: 500,
      color: '#DBDBDF',
      paddingTop: 8,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyText: {
      fontSize: 16,
      color: '#000',
    },
    imageStyle: {
      height: 180,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },

      shadowOpacity: 0.5,
      shadowRadius: 2,
    },
    searchImageStyle: {
      height: 100,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      marginRight: 16,
    },
    genreStyle: {
      height: 100,
      borderRadius: 10,
      shadowColor: '#000',
      width: '100%',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 2,
    },
    gradientStyle: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
    gradStyle: {
      borderRadius: 10,
    },
    textStyle: {
      position: 'absolute',
      color: '#FFFFFF',
      fontFamily: fonts.PoppinsMedium,
      fontWeight: 500,
      fontSize: 18,
      left: 24,
      bottom: 20,
    },
    genreTextStyle: {
      position: 'absolute',
      color: '#FFFFFF',
      fontFamily: fonts.PoppinsMedium,
      fontWeight: 500,
      fontSize: 16,
      left: 12,
      bottom: 18,
    },
    containerStyle: {
      flex: 1,
    },
    headerContainer: {
      marginBottom: 8,
    },
    contentContainerStyle: {
      marginHorizontal: 16,
      marginVertical: 16,
    },
    columnWrapperStyle: {
      justifyContent: 'space-between',
    },
    headerStyle: {
      fontFamily: fonts.PoppinsMedium,
      fontSize: 12,
      fontWeight: 500,
      color: '#202C43',
    },
    divider: {
      marginVertical: 8,
      borderWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.11)',
      marginBottom: 16,
    },
  });
};

export default createStyleSheet;
