import React from "react";
import { View, Text } from 'react-native';
import { Avatar } from "../Avatar";

import { styles } from "./styles";

export function Profile() {
    return (
      <View style={styles.container}>
        <Avatar urlImage="https://github.com/andersonfpv.png"/>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá</Text>
          <Text style={styles.username}>Anderson</Text>

          <Text style={styles.message}>Hoje é dia de Vitória</Text>
        </View>
      </View>
    );
} 