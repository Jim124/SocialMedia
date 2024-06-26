import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

import style from './style';
import { horizontalScale } from '../../assets/styles/scaling';

const StoryItem = (props) => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage
        imageDimension={horizontalScale(65)}
        profileImage={props.profileImage}
      />
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};

StoryItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
};
export default StoryItem;
