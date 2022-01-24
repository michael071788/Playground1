import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantScreen as RestaurantViewScreen } from "../../features/restaurants/screens/restaurant.screen";
import { RestaurantDetailScreen as RestaurantDetailViewScreen } from "../../features/restaurants/screens/restaurantdetail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerShown="false" //'Stack Navigator: 'headerMode="none"' is deprecated. Use 'headerShown: false' in 'screenOptions' instead.
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen
        name="nameRestaurant"
        component={RestaurantViewScreen}
      />
      <RestaurantStack.Screen
        name="nameRestaurantDetail"
        component={RestaurantDetailViewScreen}
      />
    </RestaurantStack.Navigator>
  );
};
