import { Article } from '../Screens/Article';
import { Albums } from '../Screens/Albums';
import { Contacts } from '../Screens/Contacts';
import { Chat } from '../Screens/Chat';
import { createNativeBottomTabNavigator } from '@bottom-tabs/react-navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const headerOptions = {
  headerShown: true,
  headerLargeTitle: true,
};

const Tab = createNativeBottomTabNavigator();

const ArticleStack = createNativeStackNavigator();
const AlbumsStack = createNativeStackNavigator();
const ContactsStack = createNativeStackNavigator();
const ChatStack = createNativeStackNavigator();

function ArticleStackScreen() {
  return (
    <ArticleStack.Navigator>
      <ArticleStack.Screen
        options={{ ...headerOptions }}
        name="ArticleScreen"
        component={Article}
      />
    </ArticleStack.Navigator>
  );
}

function AlbumsStackScreen() {
  return (
    <AlbumsStack.Navigator>
      <AlbumsStack.Screen
        options={{ ...headerOptions }}
        name="AlbumsScreen"
        component={Albums}
      />
    </AlbumsStack.Navigator>
  );
}

function ContactsStackScreen() {
  return (
    <ContactsStack.Navigator>
      <ContactsStack.Screen
        options={{ ...headerOptions }}
        name="ContactsScreen"
        component={Contacts}
      />
    </ContactsStack.Navigator>
  );
}

function ChatStackScreen() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        options={{ ...headerOptions }}
        name="ChatScreen"
        component={Chat}
      />
    </ChatStack.Navigator>
  );
}

function NativeBottomTabsEmbeddedStacks() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <Button
        onPress={() => navigation.navigate('Modal')}
        title="Open a modal"
      />
      <Tab.Navigator sidebarAdaptable>
        <Tab.Screen
          name="Article"
          component={ArticleStackScreen}
          options={{
            tabBarBadge: '10',
            tabBarIcon: ({ focused }) => {
              return focused
                ? require('../../assets/icons/article_dark.png')
                : require('../../assets/icons/grid_dark.png');
            },
          }}
        />
        <Tab.Screen
          name="Albums"
          component={AlbumsStackScreen}
          options={{
            tabBarIcon: () => require('../../assets/icons/grid_dark.png'),
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={ContactsStackScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              focused
                ? require('../../assets/icons/person_dark.png')
                : require('../../assets/icons/grid_dark.png'),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatStackScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              focused
                ? require('../../assets/icons/message-circle-code.svg')
                : require('../../assets/icons/grid_dark.png'),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default NativeBottomTabsEmbeddedStacks;
