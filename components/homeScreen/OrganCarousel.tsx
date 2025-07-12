import React, { useRef, useState } from 'react';

import * as Haptics from 'expo-haptics';
import { View, Animated, Dimensions, ViewToken } from 'react-native';

import OrganIcon from './OrganIcon';

import OrganListItem from '@/types/OrganListItem';

interface ViewableItemsChanged {
  viewableItems: ViewToken<OrganListItem>[];
  changed?: ViewToken<OrganListItem>[];
}

const { width } = Dimensions.get('window');

interface OrganCarouselProps {
  data: OrganListItem[];
}

export default function OrganCarousel({ data }: OrganCarouselProps) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [activeItem, setActiveItem] = useState(data[0]);
  const [isScrolling, setIsScrolling] = useState(false);

  const viewableItemsChanged = ({ viewableItems }: ViewableItemsChanged) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].item);
    }
  };

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: true,
      listener: () => {
        if (isScrolling) {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
      },
    },
  );

  return (
    <View>
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        pagingEnabled // Ensures strict snapping behavior
        contentContainerStyle={{
          paddingLeft: width * 0.34, // Centers first item
          paddingRight: width * 0.26, // Centers last item
        }}
        onScrollBeginDrag={() => {
          setIsScrolling(true);
        }}
        onScrollEndDrag={() => setIsScrolling(false)}
        onScroll={handleScroll}
        onViewableItemsChanged={viewableItemsChanged}
        scrollEventThrottle={32} // How often onScroll is called 16ms ~ 60fps
        snapToAlignment="start"
        snapToInterval={width * 0.4}
        decelerationRate="fast"
        getItemLayout={(_, index) => ({
          length: width * 0.4,
          offset: width * 0.4 * index,
          index,
        })}
        renderItem={({ index, item }) => {
          const inputRange = [
            (index - 1) * width * 0.4,
            index * width * 0.4,
            (index + 1) * width * 0.4,
          ];

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.1, 1, 0.1],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View style={{ opacity, width: width * 0.4 }}>
              <OrganIcon
                id={item.id}
                image={item.image}
                title={item.title}
                modalText={item.modalText}
                imageStyles={item.imageStyle}
                acitveItem={activeItem}
              />
            </Animated.View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
