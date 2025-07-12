import { ImageSourcePropType } from 'react-native';

export default interface OrganListItem {
  id: string;
  title: string;
  image: ImageSourcePropType;
  imageStyle: string;
  modalText: string[];
}
