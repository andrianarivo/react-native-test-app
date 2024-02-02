import React from 'react';
import {Input, Text} from '@rneui/themed';
import {useMMKVString} from 'react-native-mmkv';
import {View} from 'react-native';

export default function HomeScreen(): React.JSX.Element {
  const [username, setUsername] = useMMKVString('user.name');
  const onChangeText = (text: string) => {
    setUsername(text);
  };
  // add a form to interact with the database
  return (
    <View>
      <Input
        placeholder="Username"
        value={username}
        onChangeText={onChangeText}
      />
      <Text>{username}</Text>
    </View>
  );
}
