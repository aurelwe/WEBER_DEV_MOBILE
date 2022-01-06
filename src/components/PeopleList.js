import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const PeopleList = ({ onClick, peoplesData }) => (
  <View >
    <View >
      <Text>
         {peoplesData.name}
      </Text>
      <Text >
            {peoplesData.known_for_department}
      </Text>
      <Text >
            {peoplesData.popularity}
      </Text>
      <Text >
            
      </Text>
           
    </View>
  </View>
);

export default PeopleList;

