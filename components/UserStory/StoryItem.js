import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

import style from './style';

const StoryItem = (props) => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage imageDimension={65} profileImage={props.profileImage} />
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};

StoryItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
};
export default StoryItem;
