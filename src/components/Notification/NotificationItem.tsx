import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

interface Props {
  type: string;
  id: string;
  onPress: (id: string) => void;
}

export default function NotificationItem({type, id, onPress}: Props) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 2,
        borderColor: '#C0C0C0',
        borderBottomWidth: 1,
        padding: 5,
        marginBottom: 5,
      }}>
      <View style={{width: '58%'}}>
        <Text style={{fontSize: 14}}>{String(id)}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Button
          mode="contained"
          style={{borderRadius: 0, backgroundColor: '#16A34A', margin: 2}}
          onPress={() => {
            onPress(id);
          }}>
          Yes
        </Button>
        {/* <Button mode="contained" style={{borderRadius: 0, backgroundColor: '#EF4444', margin: 2}}>
          No
        </Button> */}
      </View>
    </TouchableOpacity>
  );
}
