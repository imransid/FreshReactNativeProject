import React from 'react';
import {View, Text} from 'react-native';

import {
  MAIN_FONT_BOLD,
  MAIN_FONT,
  MAIN_FONT_SEMI_BOLD,
  WHITE,
  TEXT_GRAY,
} from '../../constant';

const Index = (props) => {
  return (
    <>
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text style={{color: WHITE}}>Hello World</Text>
      </View>
    </>
  );
};

export default Index;
