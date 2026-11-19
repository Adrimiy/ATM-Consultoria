import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';

export default function Orcamento() {
  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [servico, setServico] = useState('');
  const [descricao, setDescricao] = useState('');

  // Serviços e seus respectivos preços
  const servicos = [
    { nome: 'Consultoria em Tecnologia', preco: 300 },
    { nome: 'Consultoria Empresarial', preco: 450 },
    { nome: 'Segurança da Informação', preco: 500 },
    { nome: 'Análise de Processos', preco: 350 },
  ];

  // Busca o preço do serviço selecionado
  const servicoSelecionado = servicos.find(
    (item) => item.nome === servico
  );

  const enviarOrcamento = () => {
    if (!nome || !empresa || !email || !telefone || !servico) {
      Alert.alert(
        'Campos obrigatórios',
        'Preencha todos os campos antes de solicitar o orçamento.'
      );
      return;
    }

    Alert.alert(
      'Solicitação enviada!',
      `Olá, ${nome}!\n\n` +
      `Empresa: ${empresa}\n` +
      `Serviço: ${servico}\n` +
      `Valor estimado: R$ ${servicoSelecionado.preco.toFixed(2).replace('.', ',')}\n\n` +
      'Sua solicitação foi registrada. Nossa equipe entrará em contato para fornecer mais informações.',
      [
        {
          text: 'OK',
          onPress: () => {
            setNome('');
            setEmpresa('');
            setEmail('');
            setTelefone('');
            setServico('');
            setDescricao('');
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Solicitar Orçamento</Text>

      <Text style={styles.texto}>
        Preencha os dados abaixo e escolha o serviço desejado para
        consultar o valor.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Nome da empresa"
        value={empresa}
        onChangeText={setEmpresa}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        keyboardType="phone-pad"
        value={telefone}
        onChangeText={setTelefone}
      />

      <Text style={styles.subtitulo}>
        Selecione o serviço:
      </Text>

      {servicos.map((item) => (
        <TouchableOpacity
          key={item.nome}
          style={[
            styles.opcao,
            servico === item.nome && styles.opcaoSelecionada,
          ]}
          onPress={() => setServico(item.nome)}
        >
          <Text
            style={[
              styles.opcaoTexto,
              servico === item.nome && styles.opcaoTextoSelecionado,
            ]}
          >
            {item.nome}
          </Text>
        </TouchableOpacity>
      ))}

      {servicoSelecionado && (
        <View style={styles.caixaPreco}>
          <Text style={styles.textoPreco}>
            Valor do serviço:
          </Text>

          <Text style={styles.preco}>
            R$ {servicoSelecionado.preco.toFixed(2).replace('.', ',')}
          </Text>
        </View>
      )}

      <Text style={styles.subtitulo}>
        Descreva sua necessidade:
      </Text>

      <TextInput
        style={[styles.input, styles.areaTexto]}
        placeholder="Conte um pouco sobre o que sua empresa precisa..."
        value={descricao}
        onChangeText={setDescricao}
        multiline
        numberOfLines={4}
      />

      <Text style={styles.observacao}>
        * Os valores apresentados são estimativas para fins demonstrativos.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={enviarOrcamento}
      >
        <Text style={styles.botaoTexto}>
          Solicitar orçamento
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000f47',
    marginBottom: 10,
  },

  texto: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },

  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 15,
  },

  subtitulo: {
    width: '100%',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000f47',
    marginTop: 10,
    marginBottom: 10,
  },

  opcao: {
    width: '100%',
    padding: 14,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#fff',
  },

  opcaoSelecionada: {
    backgroundColor: '#e0e8ff',
    borderColor: '#001f94',
  },

  opcaoTexto: {
    color: '#333',
    fontSize: 15,
  },

  opcaoTextoSelecionado: {
    color: '#001f94',
    fontWeight: 'bold',
  },

  caixaPreco: {
    width: '100%',
    backgroundColor: '#e0e8ff',
    padding: 18,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 15,
  },

  textoPreco: {
    fontSize: 16,
    color: '#000f47',
  },

  preco: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#001f94',
    marginTop: 5,
  },

  areaTexto: {
    height: 100,
    textAlignVertical: 'top',
  },

  observacao: {
    fontSize: 12,
    color: '#777',
    marginBottom: 15,
    textAlign: 'center',
  },

  botao: {
    backgroundColor: '#001f94',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginTop: 5,
  },

  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});