import { View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import StoryItem from '../UserStory/StoryItem';
import style from './style';
import { faL } from '@fortawesome/free-solid-svg-icons';

const usesStories = [
  {
    id: 1,
    username: 'zs',
    profileImageUrl: require('../../assets/images/default_profile.png'),
  },
  {
    id: 2,
    username: 'ls',
    profileImageUrl: require('../../assets/images/default_profile.png'),
  },
  {
    id: 3,
    username: 'ww',
    profileImageUrl: require('../../assets/images/default_profile.png'),
  },
  {
    id: 4,
    username: 'zl',
    profileImageUrl: require('../../assets/images/default_profile.png'),
  },
  {
    id: 5,
    username: 'zq',
    profileImageUrl: require('../../assets/images/default_profile.png'),
  },
  {
    id: 6,
    username: 'dg',
    profileImageUrl: require('../../assets/images/default_profile.png'),
  },
  {
    id: 7,
    username: 'ce',
    profileImageUrl: require('../../assets/images/default_profile.png'),
  },
  {
    id: 8,
    username: 'alex',
    profileImageUrl: require('../../assets/images/default_profile.png'),
  },
  {
    id: 9,
    username: 'ms',
    profileImageUrl: require('../../assets/images/default_profile.png'),
  },
  {
    id: 10,
    username: 'dn',
    profileImageUrl: require('../../assets/images/default_profile.png'),
  },
  {
    id: 11,
    username: 'dg',
    profileImageUrl: require('../../assets/images/default_profile.png'),
  },
];

const Users = () => {
  const storiePageSize = 4;
  const [storiesCurrentPage, setStoriesCurrentPage] = useState(1);
  const [storiesRenderData, setStoriesRenderData] = useState([]);
  const [isLoadingStories, setIsLoadingStories] = useState(false);

  function pagination(database, currentPage, pageSize) {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) return [];
    return database.slice(startIndex, endIndex);
  }
  useEffect(() => {
    setIsLoadingStories(true);
    const getInitialData = pagination(usesStories, 1, storiePageSize);
    setStoriesRenderData(getInitialData);
    setIsLoadingStories(false);
  }, []);

  return (
    <View style={style.userStoryContainer}>
      <FlatList
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (isLoadingStories) {
            return;
          }
          setIsLoadingStories(true);
          const currentToAppend = pagination(
            usesStories,
            storiesCurrentPage + 1,
            storiePageSize
          );
          if (currentToAppend.length > 0) {
            setStoriesCurrentPage(storiesCurrentPage + 1);
            setStoriesRenderData((prev) => [...prev, ...currentToAppend]);
          }
          setIsLoadingStories(false);
        }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={storiesRenderData}
        renderItem={({ item }) => (
          <StoryItem
            firstName={item.username}
            profileImage={item.profileImageUrl}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Users;
