import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function App() {

  const [tela, setTela] = useState('Home');

  function criarMenu(titulo, imagem, destino) {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => setTela(destino)}
      >
        <Image
          source={imagem}
          style={styles.imagemCard}
        />

        <Text style={styles.cardTexto}>
          {titulo}
        </Text>
      </TouchableOpacity>
    );
  }

  function Home() {
    return (
      <View style={styles.container}>

        <View style={styles.apresentacao}>

          <Image
            source={require('./assets/Imagens/logoATMazul')}
            style={styles.logoGrande}
          />

          <View style={styles.textoApresentacao}>
            <Text style={styles.subtitulo}>
              Soluções para sua empresa
            </Text>
          </View>

        </View>

        <Text style={styles.instrucao}>
          Escolha uma opção:
        </Text>

        <View style={styles.grade}>

          {criarMenu(
            'Clientes',
            require('./assets/Imagens/clientes'),
            'Clientes'
          )}

          {criarMenu(
            'Contato',
            require('./assets/Imagens/atendentes'),
            'Contato'
          )}

          {criarMenu(
            'Empresa',
            require('./assets/Imagens/empresa'),
            'Empresa'
          )}

          {criarMenu(
            'Serviços',
            require('./assets/Imagens/280406-entenda-como-uma-consultoria-pode-contribuir-na-tomada-de-decisao.jpg'),
            'Serviços'
          )}

        </View>

      </View>
    );
  }

  function Clientes() {
    return (
      <View style={styles.conteudo}>

        <Text style={styles.titulo}>
          Conheça nossos clientes
        </Text>

        <Image
          source={require('./assets/Imagens/empresa-softwares-empresariais-06.jpg')}
          style={styles.imagemDetalhe}
        />

        <Text style={styles.textoDestaque}>
          Empresa de Software
        </Text>

        <Text style={styles.texto}>
          Parceira de sucesso em tecnologia
          e inovação.
        </Text>

        <Image
          source={require('./assets/Imagens/8011887-auditoria-verificacao-as-demonstracoes-financeiras-da-empresa-empresario-tocando-auditoria-on-3d-icon-on-virtual-screen-foto.jpg')}
          style={styles.imagemDetalhe}
        />

        <Text style={styles.textoDestaque}>
          Empresa de Auditoria
        </Text>

        <Text style={styles.texto}>
          Confiança e qualidade em cada projeto.
        </Text>

      </View>
    );
  }

  function Contato() {
    return (
      <View style={styles.conteudo}>

        <Text style={styles.titulo}>
          Entre em contato conosco
        </Text>

        <Image
          source={require('./assets/Imagens/atendimentoMulher')}
          style={styles.imagemDetalhe}
        />

        <View style={styles.informacao}>
          <Text style={styles.rotulo}>E-mail</Text>
          <Text style={styles.texto}>
            atendimento@atm.com.br
          </Text>
        </View>

        <View style={styles.informacao}>
          <Text style={styles.rotulo}>Telefone</Text>
          <Text style={styles.texto}>
            (11) 3000-0000
          </Text>
        </View>

        <View style={styles.informacao}>
          <Text style={styles.rotulo}>Celular</Text>
          <Text style={styles.texto}>
            (11) 99999-9999
          </Text>
        </View>

      </View>
    );
  }

  function Empresa() {
    return (
      <View style={styles.conteudo}>

        <Text style={styles.titulo}>
          Consultoria ATM
        </Text>

        <Image
          source={require('./assets/Imagens/funcionarios')}
          style={styles.imagemDetalhe}
        />

        <Text style={styles.texto}>
          A Consultoria ATM é uma empresa fictícia
          especializada em soluções empresariais,
          tecnologia e gestão de processos.
          Nosso objetivo é oferecer soluções
          inovadoras para melhorar os resultados
          de nossos clientes.
        </Text>

      </View>
    );
  }

  function Servicos() {
    return (
      <View style={styles.conteudo}>

        <Text style={styles.titulo}>
          Soluções para sua empresa
        </Text>

        <Image
          source={require('./assets/Imagens/dicas-para-aumentar-o-faturamento-da-sua-empresa.jpg')}
          style={styles.imagemDetalhe}
        />

        <View style={styles.servico}>
          <Text style={styles.textoDestaque}>
            Consultoria em Tecnologia
          </Text>
        </View>

        <View style={styles.servico}>
          <Text style={styles.textoDestaque}>
            Consultoria Empresarial
          </Text>
        </View>

        <View style={styles.servico}>
          <Text style={styles.textoDestaque}>
            Segurança da Informação
          </Text>
        </View>

        <View style={styles.servico}>
          <Text style={styles.textoDestaque}>
            Análise de Processos
          </Text>
        </View>

      </View>
    );
  }

  // ESCOLHER QUAL TELA SERÁ EXIBIDA
  function mostrarTela() {

    switch (tela) {

      case 'Clientes':
        return <Clientes />;

      case 'Contato':
        return <Contato />;

      case 'Empresa':
        return <Empresa />;

      case 'Serviços':
        return <Servicos />;

      default:
        return <Home />;
    }
  }

  return (
    <View style={styles.app}>

      {}

      <View style={styles.cabecalho}>

        {tela !== 'Home' && (
          <TouchableOpacity
            onPress={() => setTela('Home')}
            style={styles.voltarCabecalho}
          >
            <Text style={styles.textoVoltarCabecalho}>
              ← Voltar
            </Text>
          </TouchableOpacity>
        )}

        <Image
          source={require('./assets/Imagens/logoATMbranco')}
          style={styles.logoCabecalho}
        />

        <Text style={styles.nome}>
          Consultoria ATM
        </Text>

      </View>

      {}

      <ScrollView
        contentContainerStyle={styles.area}
      >

        {mostrarTela()}

        {tela !== 'Home' && (
          <TouchableOpacity
            style={styles.botao}
            onPress={() => setTela('Home')}
          >
            <Text style={styles.botaoTexto}>
              Voltar ao início
            </Text>
          </TouchableOpacity>
        )}

      </ScrollView>

    </View>
  );
}


const styles = StyleSheet.create({

  app: {
    flex: 1,
    backgroundColor: '#D0D4D6',
  },

  cabecalho: {
    backgroundColor: '#000f47',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoCabecalho: {
    width: 45,
    height: 45,
    marginRight: 10,
    resizeMode: 'contain',
  },

  nome: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: 'bold',
  },

  voltarCabecalho: {
    position: 'absolute',
    left: 12,
    padding: 5,
  },

  textoVoltarCabecalho: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },

  area: {
    flexGrow: 1,
    padding: 15,
  },

  container: {
    alignItems: 'center',
    paddingTop: 20,
  },

  apresentacao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },

  logoGrande: {
    width: 200,
    height: 100,
    marginRight: 14,
    resizeMode: 'contain',
  },

  textoApresentacao: {
    flexShrink: 1,
  },

  subtitulo: {
    fontSize: 14,
    color: '#333333',
    marginTop: 5,
  },

  instrucao: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333333',
  },

  grade: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  card: {
    backgroundColor: '#FFFFFF',
    width: '44%',
    height: 165,
    margin: '2%',
    borderRadius: 12,
    alignItems: 'center',
    overflow: 'hidden',
    elevation: 4,
  },

  imagemCard: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },

  cardTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#001f94',
    marginTop: 10,
  },

  conteudo: {
    padding: 10,
    alignItems: 'center',
  },

  titulo: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#041634',
    textAlign: 'center',
    marginBottom: 20,
  },

  imagemDetalhe: {
    width: '100%',
    height: 190,
    borderRadius: 12,
    marginBottom: 15,
    resizeMode: 'cover',
  },

  texto: {
    fontSize: 17,
    color: '#333333',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 27,
  },

  textoDestaque: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00176b',
    textAlign: 'center',
    marginBottom: 10,
  },

  informacao: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'center',
  },

  rotulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#00176b',
    marginBottom: 5,
  },

  servico: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },

  botao: {
    backgroundColor: '#000f47',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

});