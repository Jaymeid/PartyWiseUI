import uuid from 'react-native-uuid';

import OrganImages from '@/constants/OrganImages';
import OrganListItem from '@/types/OrganListItem';

export const chestOrganData: OrganListItem[] = [
  {
    id: uuid.v4(),
    title: 'Heart',
    image: OrganImages.heartOutline,
    imageStyle: 'w-3/4',
    modalText: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ],
  },
  {
    id: uuid.v4(),
    title: 'Lungs',
    image: OrganImages.lungOutline,
    imageStyle: 'w-full',
    modalText: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
  },
];

export const midRegionOrganData: OrganListItem[] = [
  {
    id: uuid.v4(),
    title: 'Liver',
    image: OrganImages.liverOutline,
    imageStyle: 'w-3/4',
    modalText: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ],
  },
  {
    id: uuid.v4(),
    title: 'Stomach',
    image: OrganImages.stomachOutline,
    imageStyle: 'w-3/4',
    modalText: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
  },
  {
    id: uuid.v4(),
    title: 'Pancreas',
    image: OrganImages.pancreasOutline,
    imageStyle: 'w-3/4',
    modalText: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
  },
];

export const lowerRegionOrganData: OrganListItem[] = [
  {
    id: uuid.v4(),
    title: 'Kidneys',
    image: OrganImages.kidneysOutline,
    imageStyle: 'w-3/4',
    modalText: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ],
  },
  {
    id: uuid.v4(),
    title: 'Large Intestine',
    image: OrganImages.largeIntestineOutline,
    imageStyle: 'w-3/4',
    modalText: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
  },
  {
    id: uuid.v4(),
    title: 'Small Intestine',
    image: OrganImages.smallIntestineOutline,
    imageStyle: 'w-3/4',
    modalText: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
  },
];
