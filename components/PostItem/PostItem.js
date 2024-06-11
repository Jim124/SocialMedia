import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import UserProfileImage from '../UserProfileImage/UserProfileImage';
import style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faHeart,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';
import { horizontalScale, scaleFontSize } from '../../assets/styles/scaling';
const PostItem = (props) => {
  return (
    <View style={style.usePostContainer}>
      <View style={style.postContainer}>
        <View style={style.profileContainer}>
          <UserProfileImage
            profileImage={props.profileImgUrl}
            imageDimension={horizontalScale(45)}
          />
          <View style={style.nameContainer}>
            <Text style={style.username}>
              {props.firstName} {props.lastName}
            </Text>
            <Text style={style.location}>{props.location}</Text>
          </View>
        </View>
        <FontAwesomeIcon
          icon={faEllipsisH}
          color='#79869F'
          size={scaleFontSize(24)}
        />
      </View>
      <View style={style.imageContainer}>
        <Image source={props.imageUrl} />
      </View>
      <View style={style.favorites}>
        <View style={style.favoriteContainer}>
          <FontAwesomeIcon icon={faHeart} />
          <Text style={style.likes}>{props.likes}</Text>
        </View>
        <View style={[style.favoriteContainer, style.comments]}>
          <FontAwesomeIcon icon={faMessage} />
          <Text style={style.likes}>{props.comments}</Text>
        </View>
        <View style={[style.favoriteContainer, style.comments]}>
          <FontAwesomeIcon icon={faBookmark} />
          <Text style={style.likes}>{props.comments}</Text>
        </View>
      </View>
    </View>
  );
};

PostItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imageUrl: PropTypes.any.isRequired,
  lastName: PropTypes.string.isRequired,
  bookMarks: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  profileImgUrl: PropTypes.any.isRequired,
};
export default PostItem;
