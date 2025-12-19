import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import FiHome from '../../shared/icons/FiHome';
import BiUserCircle from '../../shared/icons/BiUserCircle';
import { COLOR } from '../../shared/common/tokens';
import FiCalendar from '@/shared/icons/FiCalendar';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from 'react-native-reanimated';

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const CustomeNavbar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <AnimatedTouchableOpacity
            layout={LinearTransition.springify().mass(0.5)}
            key={route.key}
            onPress={onPress}
            style={[
              styles.tab_item,
              { backgroundColor: isFocused ? COLOR.SECONDARY : 'transparent' },
            ]}
          >
            {getIconByRouteName(
              route.name,
              isFocused ? COLOR.PRIMARY : COLOR.SECONDARY,
            )}
            {isFocused && (
              <Animated.Text
                entering={FadeIn.duration(200)}
                exiting={FadeOut.duration(200)}
                style={styles.text}
              >
                {label as string}
              </Animated.Text>
            )}
          </AnimatedTouchableOpacity>
        );
      })}
    </View>
  );

  function getIconByRouteName(routeName: string, color: string) {
    switch (routeName) {
      case 'index':
        return <FiHome width={18} color={color} />;
      case 'profile':
        return <BiUserCircle width={24} color={color} />;
      case 'hobbies':
        return <FiCalendar width={18} color={color} />;
    }
  }
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.PRIMARY,
    width: '60%',
    alignSelf: 'center',
    bottom: 40,
    borderRadius: 40,
    paddingHorizontal: 12,
    paddingVertical: 15,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
  },
  tab_item: {
    flexDirection: 'row',
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 30,
  },
  text: {
    color: COLOR.PRIMARY,
    marginLeft: 8,
  },
});

export default CustomeNavbar;
