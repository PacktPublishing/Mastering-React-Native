import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import pizzaImage from './images/pizza.jpg';

const MenuItem = ({ item, price }) => (
  <View style={styles.menuItem}>
    <Text style={styles.title}>{item.toUpperCase()}</Text>
    <Text style={styles.info}>${price}</Text>
  </View>
);

MenuItem.propTypes = {
  item: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired
};

const BackgroundImage = ({ menuItems }) => (
  <Image source={pizzaImage} style={styles.bg}>
    <View style={styles.content}>
      {menuItems.map((menuItem, i) => <MenuItem {...menuItem} key={i} />)}
    </View>
  </Image>
);

BackgroundImage.propTypes = {
  menuItems: React.PropTypes.arrayOf(React.PropTypes.object)
};

BackgroundImage.defaultProps = {
  menuItems: [{
    item: 'Cheese Pizza',
    price: 12.99
  }, {
    item: 'Pepperoni Pizza',
    price: 13.99
  }, {
    item: 'Sausage Pizza',
    price: 14.49
  }, {
    item: 'Stuffed Crust Pizza',
    price: 14.99
  }, {
    item: 'Extra Cheese Pizza',
    price: 13.49
  }]
};

const styles = StyleSheet.create({
  content: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff3',
    paddingHorizontal: 20
  },
  bg: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    resizeMode: 'cover'
  },
  menuItem: {
    paddingVertical: 5
  },
  title: {
    color: '#222',
    fontSize: 22,
    fontWeight: 'bold',
    textShadowColor: '#ddd',
    textShadowOffset: {
      width: 1,
      height: 1
    },
    textShadowRadius: 0
  },
  info: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10
  }
});

export default BackgroundImage;

export const containerStyles = StyleSheet.create({
  container: { // eslint-disable-line react-native/no-unused-styles
    flex: 1
  }
});
