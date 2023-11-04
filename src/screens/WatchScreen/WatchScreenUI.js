import React from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../widgets/Header';
import {createStyleSheet} from './style';
import constants from '../../assets/Constants/constants';

const WatchScreenUI = props => {
  const {
    movieList,
    nextPage,
    totalMovies,
    loader,
    page,
    showSearchBar,
    handleSearchBar,
    onSearch,
    searchText,
    searchResult,
    movieGenres,
    onSubmitEditing,
    showResult,
  } = props;

  const renderItem = ({item}) => (
    <View
      style={
        showSearchBar ? styles.genreContainerStyle : styles.imageContainer
      }>
      <LinearGradient colors={['#000000', '#000008']} style={styles.gradStyle}>
        <Image
          source={
            item.image
              ? item.image
              : {
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }
          }
          style={showSearchBar ? styles.genreStyle : styles.imageStyle}
        />
        {showSearchBar ? (
          <Text style={styles.genreTextStyle}>{item.title}</Text>
        ) : (
          <LinearGradient
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.gradientStyle}>
            <Text style={styles.textStyle}>{item.title}</Text>
          </LinearGradient>
        )}
      </LinearGradient>
    </View>
  );

  const renderSearchResult = ({item}) => (
    <View style={styles.searchContainerStyle}>
      <Image source={item.image} style={styles.searchImageStyle} />
      <View style={styles.textContainer}>
        <Text style={styles.primaryStyle}>{item.title}</Text>
        <Text style={styles.secondaryStyle}>{item.secondaryText}</Text>
      </View>
    </View>
  );

  const handleScroll = event => {
    const offset = event.nativeEvent.contentOffset.y;
    const height = event.nativeEvent.contentSize.height;
    const screenHeight = event.nativeEvent.layoutMeasurement.height;
    const isEndReached = offset + screenHeight >= height;
    if (isEndReached) {
      nextPage();
    }
  };

  const onEndReached = () => {
    if (!loader) {
      nextPage();
    }
  };

  const renderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>{constants.NO_DATA_FOUND}</Text>
    </View>
  );

  const styles = createStyleSheet();

  return (
    <View style={styles.containerStyle}>
      <View style={styles.headerContainer}>
        <Header
          headerTitile={constants.Watch}
          hasIconSearch
          showResult={showResult}
          showSearchBar={showSearchBar}
          handleSearchBar={handleSearchBar}
          onSubmitEditing={onSubmitEditing}
          searchText={searchText}
          onChangeText={onSearch}
        />
      </View>
      {searchText.length > 0 ? (
        <View style={styles.contentContainerStyle}>
          {!showResult && (
            <>
              <Text style={styles.headerStyle}>{constants.TOP_RESULTS}</Text>
              <View style={styles.divider} />
            </>
          )}
          <FlatList
            data={searchResult}
            renderItem={renderSearchResult}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      ) : (
        <FlatList
          contentContainerStyle={styles.contentContainerStyle}
          columnWrapperStyle={showSearchBar ? styles.columnWrapperStyle : null}
          data={showSearchBar ? movieGenres : movieList}
          renderItem={renderItem}
          initialNumToRender={10}
          numColumns={showSearchBar ? 2 : 1}
          key={showSearchBar ? 'a' : 'b'}
          keyExtractor={item => item.id.toString()}
          onScroll={handleScroll}
          showsVerticalScrollIndicator={false}
          onEndReached={() => page !== totalMovies && onEndReached()}
          onEndReachedThreshold={0.8}
          ListEmptyComponent={renderEmptyComponent}
        />
      )}
    </View>
  );
};

WatchScreenUI.propTypes = {
  movieList: PropTypes.array.isRequired,
  nextPage: PropTypes.func.isRequired,
  totalMovies: PropTypes.number.isRequired,
  loader: PropTypes.bool.isRequired,
  page: PropTypes.number.isRequired,
  showSearchBar: PropTypes.bool.isRequired,
  handleSearchBar: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  movieGenres: PropTypes.array.isRequired,
  searchResult: PropTypes.array.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
  showResult: PropTypes.bool.isRequired,
};

export default WatchScreenUI;
