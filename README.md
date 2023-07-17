# APP de Login

Breve descrição do projeto.

## Instalação

1. Clone o repositório:

```
git clone https://github.com/seu-usuario/seu-projeto.git
```

## Descrição

Este projeto consiste em um aplicativo móvel desenvolvido com React Native. Ele permite que os usuários façam login e se registrem em uma conta. O aplicativo possui duas telas principais: a tela de login (Login.js) e a tela de registro (Registro.js).

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

- **App.js**: O arquivo principal do aplicativo, que contém a navegação entre as telas.

- **Screens**:
  - **Entrada.js**: A tela de login, onde os usuários podem inserir seu e-mail e senha para fazer login.

  - **Regsitro.js**: A tela de registro, onde os usuários podem inserir seu nome de usuário, e-mail, senha e confirmação de senha para criar uma nova conta.

## Dependências

Certifique-se de ter as seguintes dependências instaladas antes de executar o projeto:

- React Native
- @react-navigation/native
- @react-navigation/stack

## Executando o Projeto

1. Navegue para o diretório do projeto:

```
cd seu-projeto
```

2. Instale as dependências:

```
npm install
```

ou

```
yarn install
```

3. Execute o aplicativo no emulador ou dispositivo:

```
npx react-native run-android
```

ou

```
npx react-native run-ios
```

## Como Usar

1. Abra o aplicativo e você será direcionado para a tela de login (Entrada.js).

2. Na tela de login, insira seu e-mail e senha nos campos de texto correspondentes.

3. Toque no botão "Entrar" para fazer login.

4. Se você ainda não tem uma conta, toque no botão "Criar Conta" para ser direcionado para a tela de registro (Regsitro.js).

5. Na tela de registro, preencha os campos com seu nome de usuário, e-mail, senha e confirmação de senha.

6. Toque no botão "Cadastrar" para criar sua conta.

7. Após fazer login ou se registrar, você será redirecionado para outras partes do aplicativo, dependendo da lógica de navegação definida em seu código.

## Contribuição

Se você quiser contribuir para este projeto, siga as etapas abaixo:

1. Faça um fork do projeto.

2. Crie uma nova branch com sua feature ou correção de bug: 

```
git checkout -b minha-feature
```

3. Faça as alterações necessárias e adicione os arquivos modificados:

```
git add .
```

4. Faça o commit das suas alterações:

```
git commit -m 'Minha nova feature'
```

5. Faça o push para o repositório remoto:

```
git push origin minha-feature
```

6. Envie um Pull Request com suas alterações.

## Licença

Este projeto está licenciado sob a licença [NOME DA LICENÇA]. Consulte o arquivo LICENSE para obter mais detalhes.

## Estrutura de Arquivos

A estrutura de arquivos do projeto está organizada da seguinte forma:

```
├── App.js
├── Screens
│   ├── Entrada.js
│   └── Regsitro.js
│ 
├── assets
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash.png
│ 
├── package.json
│ 
└── README.md
```

- **App.js**: O arquivo principal do aplicativo, que contém a configuração da navegação entre as telas.

- **Screens**: Uma pasta que contém os arquivos das telas do aplicativo.
  - **Entrada.js**: O componente da tela de login, onde os usuários podem inserir seu e-mail e senha para fazer login.

  - **Regsitro.js**: O componente da tela de registro, onde os usuários podem inserir seu nome de usuário, e-mail, senha e confirmação de senha para criar uma nova conta.

- **package.json**: O arquivo de configuração do Node.js que contém as dependências do projeto.

- **README.md**: Este arquivo de documentação com informações sobre o projeto e instruções de instalação e uso.

Certifique-se de ter todos os arquivos e dependências corretamente configurados para executar o aplicativo com sucesso.



Arquivo App.js
Este arquivo é o ponto de entrada principal do aplicativo. Ele configura a navegação entre as telas usando o pacote react-navigation.

Importações:
React e useState são importados do pacote react para permitir o uso de componentes baseados em classe e hooks de estado.
NavigationContainer é importado do pacote @react-navigation/native para envolver todo o aplicativo e fornecer a navegação entre as telas.
createStackNavigator é importado do pacote @react-navigation/stack para criar uma pilha de navegação para as telas do aplicativo.
Login e Signin são importados dos arquivos Entrada.js e Registro.js, respectivamente, para serem usados como componentes de tela.
Componente principal:
A função App é definida como o componente principal do aplicativo.
O componente retorna um elemento NavigationContainer que envolve um elemento Stack.Navigator.
Dentro do Stack.Navigator, há duas telas definidas como elementos Stack.Screen:
A primeira tela é chamada de "LogIn" e usa o componente Login importado.
A segunda tela é chamada de "Signin" e usa o componente Signin importado.
Arquivo Entrada.js (Tela de Login)
Este arquivo contém o componente da tela de login, onde os usuários podem inserir seu e-mail e senha para fazer login.

Importações:
Várias importações são feitas a partir do pacote react-native para obter os componentes necessários para construir a interface da tela.
useState e useEffect são importados do pacote react para permitir o uso de hooks de estado e efeitos colaterais.
Animated e Keyboard são importados do pacote react-native para lidar com animações e eventos do teclado.
Componente principal:
O componente principal é definido como uma função chamada Login que recebe a propriedade de navegação como parâmetro.
Diversos estados são declarados usando o useState hook para armazenar os valores de animação e opacidade.
O hook useEffect é usado para definir os listeners de eventos do teclado e iniciar as animações quando necessário.
A função keyboardDidShow é definida para executar as animações quando o teclado é exibido.
A função keyboardDidHide é definida para executar as animações quando o teclado é ocultado.
O componente retorna um elemento KeyboardAvoidingView que envolve a interface da tela.
Dentro do KeyboardAvoidingView, há um elemento View que contém uma imagem animada (usando Animated.Image) e um elemento Animated.View que contém os campos de entrada, botões e outros elementos da tela.
Arquivo Registro.js (Tela de Registro)
Este arquivo contém o componente da tela de registro, onde os usuários podem inserir seu nome de usuário, e-mail, senha e confirmação de senha para criar uma nova conta.

Importações:
As mesmas importações são feitas como no arquivo Entrada.js.
Componente principal:
O componente principal é definido como uma função chamada Registro que recebe a propriedade de navegação como parâmetro.
O componente segue uma estrutura semelhante ao Entrada.js, com a definição de estados, configuração de animações e manipulação de eventos do teclado.
A diferença está na interface da tela, onde são exibidos campos adicionais para o nome de usuário e a confirmação de senha.

App.js: O arquivo principal do aplicativo, que contém a configuração da navegação entre as telas.
Screens: Uma pasta que contém os arquivos das telas do aplicativo.
Entrada.js: O componente da tela de login, onde os usuários podem inserir seu e-mail e senha para fazer login.
Registro.js: O componente da tela de registro, onde os usuários podem inserir seu nome de usuário, e-mail, senha e confirmação de senha para criar uma nova conta.
package.json: O arquivo de configuração do Node.js que contém as dependências do projeto.
README.md: Este arquivo de documentação com informações sobre o projeto e instruções de instalação e uso.
Certifique-se de ter todos os arquivos e dependências corretamente configurados para executar o aplicativo com sucesso.
