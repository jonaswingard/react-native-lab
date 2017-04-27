import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

export default class textinput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      list: ['Bode', 'Giggety giggety', 'Ok Ray']
    };
  }

  onSubmitEdit = () => {
    const text = this.state.text;
    this.textInputRef.clear();
    this.setState({
      list: this.state.list.concat([text]),
      text: '',
      selectedItem: {}
    });
  }

  removeItem = (index) => {
    var temp = this.state.list.concat([]);
    temp.splice(index, 1);
    this.setState({
      list: temp
    });
  }

  onSlump = () => {
    const item = this.state.list[Math.floor(Math.random()*this.state.list.length)];
    alert(item);
  }

  getList = () => {
    return this.state.list.map((item, index) => {
      return <TouchableHighlight
        key={index}
        onPress={() => this.removeItem(index)}
        underlayColor="red"
      >
        <Text
          style={styles.item}
        >
          {item}
        </Text>
      </TouchableHighlight>
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>
            Vem är din favorit-Miller???
          </Text>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Add item!"
            ref={ref => this.textInputRef = ref}
            onChangeText={(text) => this.setState({text})}
            autoFocus={true}
            blurOnSubmit={false}
            onSubmitEditing={this.onSubmitEdit} />
          <TouchableHighlight
            style={styles.submit}
            onPress={this.onSubmitEdit}
            underlayColor="gray"
          >
            <Text style={{textAlign: 'center'}}>Add</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.textWrapper}>
          {this.getList()}
        </View>
        <View>
          <TouchableHighlight
            style={styles.slump}
            underlayColor="gray"
            onPress={this.onSlump}
          >
            <Text style={{textAlign: 'center'}}>Slump Me!</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'flex-start',
    paddingTop: 100
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textWrapper: {
    marginTop: 20,
    alignItems: 'center'
  },
  input: {
    flex: 4,
    margin: 15,
    height: 40,
    padding: 5,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5
  },
  submit: {
    flex: 1,
    margin: 15,
    backgroundColor: 'silver',
    padding: 10
  },
  heading: {
    fontSize: 30,
    marginBottom: 20
  },
  item: {
    fontSize: 20
  },
  slump: {
    backgroundColor: 'silver',
    padding: 13,
    marginTop: 20
  }
});

AppRegistry.registerComponent('textinput', () => textinput);
