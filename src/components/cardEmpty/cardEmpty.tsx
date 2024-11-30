import { Text, View } from 'react-native'

import { styles } from './styles'

export function TaskCardEmpty() {
  return (
    <View style={styles.emptyCard}>
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.subtitle}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}
