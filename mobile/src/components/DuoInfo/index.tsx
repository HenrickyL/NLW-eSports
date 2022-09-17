import { View,Text,ColorValue } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

interface Props{
    label: string
    value: string
    colorValue?: ColorValue
}

export function DuoInfo(props:Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>
            {props.label}
        </Text>
        <Text
            numberOfLines={1} 
            style={[styles.value,{color:props.colorValue ??THEME.COLORS.TEXT}]}>
            {props.value}
        </Text>

    </View>
  );
}