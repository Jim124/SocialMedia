import { StyleSheet } from 'react-native';

import { getFontFamily } from '../../assets/fonts/helper';
const style = StyleSheet.create({
  usePostContainer: {
    marginTop: 35,
    paddingBottom: 20,
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
    marginLeft: 10,
  },
  username: {
    color: '#000',
    fontFamily: getFontFamily('inter', '600'),
    fontSize: 16,
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('inter', '400'),
    fontSize: 12,
    marginTop: 5,
    textAlign: 'left',
    marginLeft: -4,
  },
  imageContainer: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favorites: {
    marginLeft: 10,
    flexDirection: 'row',
  },
  favoriteContainer: {
    flexDirection: 'row',
  },
  likes: {
    marginLeft: 12,
    color: '#79869F',
  },
  comments: {
    marginLeft: 27,
  },
});

export default style;
