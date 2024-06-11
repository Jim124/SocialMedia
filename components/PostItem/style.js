import { StyleSheet } from 'react-native';

import {
  verticalScale,
  horizontalScale,
  scaleFontSize,
} from '../../assets/styles/scaling';
import { getFontFamily } from '../../assets/fonts/helper';
const style = StyleSheet.create({
  usePostContainer: {
    flex: 1,
    marginTop: verticalScale(35),
    paddingBottom: verticalScale(20),
    borderBottomWith: 1,
    borderBottomColor: '#EFF2F6',
  },
  postContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  profileContainer: {
    flexDirection: 'row',
  },
  nameContainer: {
    justifyContent: 'center',
    marginLeft: horizontalScale(10),
  },
  username: {
    color: '#000',
    fontFamily: getFontFamily('inter', '600'),
    fontSize: scaleFontSize(16),
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('inter', '400'),
    fontSize: scaleFontSize(12),
    marginTop: verticalScale(5),
    textAlign: 'left',
  },
  imageContainer: {
    marginVertical: verticalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  favorites: {
    flexDirection: 'row',
  },
  favoriteContainer: {
    flexDirection: 'row',
  },
  likes: {
    marginLeft: verticalScale(12),
    color: '#79869F',
  },
  comments: {
    marginLeft: verticalScale(27),
  },
});

export default style;
