import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet
} from 'react-native';

export default function Agendamento() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [servico, setServico] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');

  const horarios = [
    '09:00', '10:00', '11:00',
    '14:00', '15:00', '16:00'
  ];

  const servicos = [
    'Consultoria em Tecnologia',
    'Consultoria Empresarial',
    'Segurança da Informação',
    'Análise de Processos'
  ];

  function confirmarAgendamento() {

    if (
      !nome.trim() ||
      !email.trim() ||
      !telefone.trim() ||
      !servico ||
      !data.trim() ||
      !horario
    ) {
      Alert.alert(
        'Atenção',
        'Preencha todos os campos obrigatórios.'
      );
      return;
    }


    Alert.alert(
  'Agendamento solicitado!',
  `Olá, ${nome}! Sua solicitação foi registrada com sucesso.\n\n` +
  `Serviço: ${servico}\n` +
  `Data: ${data}\n` +
  `Horário: ${horario}\n\n` +
  'Em breve, nossa equipe entrará em contato para confirmar o agendamento.',
  [
    {
      text: 'OK',
      onPress: () => {
        setNome('');
        setEmail('');
        setTelefone('');
        setServico('');
        setData('');
        setHorario('');
      },
    },
  ]
);

    setNome('');
    setEmail('');
    setTelefone('');
    setServico('');
    setData('');
    setHorario('');
  }

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Agendamento de Consultoria
      </Text>

      <Text style={styles.descricao}>
        Escolha o serviço e o melhor horário para solicitar seu atendimento.
      </Text>

      <Text style={styles.subtitulo}>
        Dados pessoais
      </Text>

      <Text style={styles.rotulo}>Nome completo *</Text>
      <TextInput
        style={styles.campo}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.rotulo}>E-mail *</Text>
      <TextInput
        style={styles.campo}
        placeholder="exemplo@email.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.rotulo}>Telefone *</Text>
      <TextInput
        style={styles.campo}
        placeholder="(00) 00000-0000"
        keyboardType="phone-pad"
        value={telefone}
        onChangeText={setTelefone}
      />

      <Text style={styles.subtitulo}>
        Serviço desejado
      </Text>

      {servicos.map((item) => (
        <TouchableOpacity
          key={item}
          style={[
            styles.opcao,
            servico === item && styles.selecionado
          ]}
          onPress={() => setServico(item)}
        >
          <Text style={styles.textoOpcao}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.subtitulo}>
        Data e horário
      </Text>

      <Text style={styles.rotulo}>Data desejada *</Text>

      <TextInput
        style={styles.campo}
        placeholder="DD/MM/AAAA"
        keyboardType="numeric"
        maxLength={10}
        value={data}
        onChangeText={setData}
      />

      <Text style={styles.rotulo}>
        Escolha um horário *
      </Text>

      <View style={styles.grade}>
        {horarios.map((hora) => (
          <TouchableOpacity
            key={hora}
            style={[
              styles.horario,
              horario === hora && styles.selecionado
            ]}
            onPress={() => setHorario(hora)}
          >
            <Text style={styles.textoOpcao}>
              {hora}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.observacao}>
        * Campos obrigatórios
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={confirmarAgendamento}
      >
        <Text style={styles.botaoTexto}>
          Confirmar agendamento
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 10,
    alignItems: 'center',
  },

  titulo: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#041634',
    textAlign: 'center',
    marginBottom: 12,
  },

  descricao: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 23,
  },

  subtitulo: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#041634',
    marginTop: 18,
    marginBottom: 12,
    alignSelf: 'flex-start',
  },

  rotulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#00176b',
    marginBottom: 6,
    alignSelf: 'flex-start',
  },

  campo: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#BFC8D0',
    borderRadius: 8,
    padding: 13,
    fontSize: 16,
    marginBottom: 14,
  },

  opcao: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#BFC8D0',
    borderRadius: 8,
    padding: 14,
    marginBottom: 10,
  },

  selecionado: {
    backgroundColor: '#DCE8FF',
    borderColor: '#001f94',
    borderWidth: 2,
  },

  textoOpcao: {
    color: '#333333',
    fontSize: 15,
  },

  grade: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },

  horario: {
    width: '30%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#BFC8D0',
    borderRadius: 8,
    padding: 13,
    alignItems: 'center',
    marginBottom: 10,
  },

  observacao: {
    fontSize: 13,
    color: '#666666',
    alignSelf: 'flex-start',
    marginTop: 10,
  },

  botao: {
    backgroundColor: '#000f47',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

});