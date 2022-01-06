import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const PeopleList = ({ onClick, peoplesData }) => (
<TouchableOpacity onPress={() => { onClick(peoplesData.id) }}>
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
  </TouchableOpacity>
);

export default PeopleList;

