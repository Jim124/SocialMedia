import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';
const UserProfileImage = (props) => {
  return (
    <View
      style={[style.useImageContainer, { borderRadius: props.imageDimension }]}
    >
      <Image
        style={{ width: props.imageDimension, height: props.imageDimension }}
        source={props.profileImage}
      />
    </View>
  );
};
UserProfileImage.propTypes = {
  profileImage: PropTypes.any.isRequired,
  imageDimension: PropTypes.number.isRequired,
};
export default UserProfileImage;
