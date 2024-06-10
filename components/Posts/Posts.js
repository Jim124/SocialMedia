import { FlatList, View } from 'react-native';
import { useEffect, useState } from 'react';

import style from './style';
import PostItem from '../PostItem/PostItem';

const posts = [
  {
    id: 1,
    firstName: 'Jeson',
    lastName: 'zli',
    likes: 1201,
    comments: 34,
    bookMarks: 15,
    location: 'Guangzhou, China',
    imageUrl: require('../../assets/images/default_post.png'),
    profileImgUrl: require('../../assets/images/default_profile.png'),
  },
  {
    id: 2,
    firstName: 'Jeson',
    lastName: 'zli',
    likes: 1201,
    comments: 34,
    bookMarks: 15,
    location: 'Guangzhou, China',
    imageUrl: require('../../assets/images/default_post.png'),
    profileImgUrl: require('../../assets/images/default_profile.png'),
  },
  {
    id: 3,
    firstName: 'Jeson',
    lastName: 'zli',
    likes: 1201,
    comments: 34,
    bookMarks: 15,
    location: 'Guangzhou, China',
    imageUrl: require('../../assets/images/default_post.png'),
    profileImgUrl: require('../../assets/images/default_profile.png'),
  },
  {
    id: 4,
    firstName: 'Jeson',
    lastName: 'zli',
    likes: 1201,
    comments: 34,
    bookMarks: 15,
    location: 'Guangzhou, China',
    imageUrl: require('../../assets/images/default_post.png'),
    profileImgUrl: require('../../assets/images/default_profile.png'),
  },
  {
    id: 5,
    firstName: 'Jeson',
    lastName: 'zli',
    likes: 1201,
    comments: 34,
    bookMarks: 15,
    location: 'Guangzhou, China',
    imageUrl: require('../../assets/images/default_post.png'),
    profileImgUrl: require('../../assets/images/default_profile.png'),
  },
  {
    id: 6,
    firstName: 'Jeson',
    lastName: 'zli',
    likes: 1201,
    comments: 34,
    bookMarks: 15,
    location: 'Guangzhou, China',
    imageUrl: require('../../assets/images/default_post.png'),
    profileImgUrl: require('../../assets/images/default_profile.png'),
  },
  {
    id: 7,
    firstName: 'Jeson',
    lastName: 'zli',
    likes: 1201,
    comments: 34,
    bookMarks: 14,
    location: 'Guangzhou, China',
    imageUrl: require('../../assets/images/default_post.png'),
    profileImgUrl: require('../../assets/images/default_profile.png'),
  },
  {
    id: 8,
    firstName: 'Jeson',
    lastName: 'zli',
    likes: 1201,
    comments: 34,
    bookMarks: 15,
    location: 'Guangzhou, China',
    imageUrl: require('../../assets/images/default_post.png'),
    profileImgUrl: require('../../assets/images/default_profile.png'),
  },
  {
    id: 9,
    firstName: 'Jeson',
    lastName: 'zli',
    likes: 1201,
    comments: 34,
    bookMarks: 15,
    location: 'Guangzhou, China',
    imageUrl: require('../../assets/images/default_post.png'),
    profileImgUrl: require('../../assets/images/default_profile.png'),
  },
  {
    id: 10,
    firstName: 'Jeson',
    lastName: 'zli',
    likes: 1201,
    comments: 34,
    bookMarks: 15,
    location: 'Guangzhou, China',
    imageUrl: require('../../assets/images/default_post.png'),
    profileImgUrl: require('../../assets/images/default_profile.png'),
  },
  {
    id: 11,
    firstName: 'Jeson',
    lastName: 'zli',
    likes: 1201,
    comments: 34,
    bookMarks: 15,
    location: 'Guangzhou, China',
    imageUrl: require('../../assets/images/default_post.png'),
    profileImgUrl: require('../../assets/images/default_profile.png'),
  },
  {
    id: 12,
    firstName: 'Jeson',
    lastName: 'zli',
    likes: 1201,
    comments: 34,
    bookMarks: 15,
    location: 'Guangzhou, China',
    imageUrl: require('../../assets/images/default_post.png'),
    profileImgUrl: require('../../assets/images/default_profile.png'),
  },
  {
    id: 13,
    firstName: 'Jeson',
    lastName: 'zli',
    likes: 1201,
    comments: 34,
    bookMarks: 15,
    location: 'Guangzhou, China',
    imageUrl: require('../../assets/images/default_post.png'),
    profileImgUrl: require('../../assets/images/default_profile.png'),
  },
  {
    id: 14,
    firstName: 'Jeson',
    lastName: 'zli',
    likes: 1201,
    comments: 34,
    bookMarks: 15,
    location: 'Guangzhou, China',
    imageUrl: require('../../assets/images/default_post.png'),
    profileImgUrl: require('../../assets/images/default_profile.png'),
  },
  {
    id: 15,
    firstName: 'Jeson',
    lastName: 'zli',
    likes: 1201,
    comments: 34,
    bookMarks: 15,
    location: 'Guangzhou, China',
    imageUrl: require('../../assets/images/default_post.png'),
    profileImgUrl: require('../../assets/images/default_profile.png'),
  },
  {
    id: 16,
    firstName: 'Jeson',
    lastName: 'zli',
    likes: 1201,
    comments: 34,
    bookMarks: 15,
    location: 'Guangzhou, China',
    imageUrl: require('../../assets/images/default_post.png'),
    profileImgUrl: require('../../assets/images/default_profile.png'),
  },
];
const Posts = () => {
  const postPageSize = 4;
  const [postCurrentPage, setPostCurrentPage] = useState(1);
  const [postsRenderData, setPostsRenderData] = useState([]);
  const [isPostLoading, setIsPostLoading] = useState(false);

  function pagination(database, currentPage, pageSize) {
    console.log('currentPage:' + currentPage);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex > database.length) return [];
    return database.slice(startIndex, endIndex);
  }

  useEffect(() => {
    setIsPostLoading(true);
    const initPosts = pagination(posts, 1, postPageSize);
    setPostsRenderData(initPosts);
    setIsPostLoading(false);
  }, []);
  return (
    <View style={style.postContainer}>
      <FlatList
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (isPostLoading) return;
          setIsPostLoading(true);
          const currentPostToAppend = pagination(
            posts,
            postCurrentPage + 1,
            postPageSize
          );
          if (currentPostToAppend.length > 0) {
            setPostCurrentPage(postCurrentPage + 1);
            setPostsRenderData((currentRender) => [
              ...currentRender,
              ...currentPostToAppend,
            ]);
          }
          setIsPostLoading(false);
        }}
        data={postsRenderData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <PostItem
              firstName={item.firstName}
              imageUrl={item.imageUrl}
              location={item.location}
              lastName={item.lastName}
              likes={item.likes}
              bookMarks={item.bookMarks}
              comments={item.comments}
              profileImgUrl={item.profileImgUrl}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Posts;
