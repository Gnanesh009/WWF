import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, Dimensions, ImageBackground,StatusBar,Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Games = ({navigation}) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
    
const screenWidth=Dimensions.get('screen').width;
const screenHeight=Dimensions.get('screen').height;

  const handleSquarePress = (index) => {
    if (board[index] || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);

    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setPlayer(player === 'X' ? 'O' : 'X');
    }
  };

  const calculateWinner = (board) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const renderSquare = (index) => {
      return (
        
      <TouchableOpacity
        style={styles.square}
        onPress={() => handleSquarePress(index)}
      >
        <Text style={{fontFamily:'Outfit-Light',color:'white'}}>{board[index]}</Text>
              </TouchableOpacity>
              
    );
  };

  const renderStatus = () => {
    if (winner) {
      return <Text style={{fontFamily:'Outfit-Light',backgroundColor:'skyblue',margin:10,borderRadius:19,width:90,textAlign:'center'}}>Winner: {winner}</Text>;
    } else {
      return <Text style={{fontFamily:'Outfit-Light',backgroundColor:'#e0da10',width:120,textAlign:'center',flexDirection:'row',borderRadius:19}}>Next player: {player}</Text>;
    }
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setPlayer('X');
    setWinner(null);
  };

    return (

  <ImageBackground
        style={{height: screenHeight, width:screenWidth,flex:1}}
      source={require('../assets/background_image.png')}>
       
     
      <SafeAreaView style={{flex:1 }}>
        <View style={{ flex: 1 }}>
          <StatusBar
        animated={true}
          backgroundColor="black"/>
        <View style={{height:'20%',flexDirection:'row',marginLeft:0,marginRight:0,backgroundColor:'#E0DA10',borderBottomLeftRadius:45,borderBottomRightRadius:45}}>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={() => navigation.navigate('HomeScreen')}>
        <Image source={require('../assets/backarrow.png')} style={{width:30,height:30,marginLeft:10}}  />
        </TouchableOpacity>
        <View style={{flex:1,fontWeight:'700',justifyContent:'center',paddingLeft:10}}>
        <Text style={{color:"black",fontSize:18,fontWeight:'500',justifyContent:'center',fontFamily:'Outfit-Medium'}}>Games</Text>
        </View>
       
      
      </View>
    <View style={styles.container}>
      <View style={styles.board}>
        <View style={styles.row}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </View>
        <View style={styles.row}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </View>
        <View style={styles.row}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </View>
      </View>
      {renderStatus()}
      {winner && (
        <TouchableOpacity onPress={handleReset}>
          <View style={styles.resetButton}>
            <Text style={styles.resetButtonText}>Play Again</Text>
          </View>
        </TouchableOpacity>
      )}
                    </View>
          </View>
           <View style={{ flexDirection:'row-reverse',marginHorizontal:20}}>
                <Pressable onPress={() => navigation.navigate('HomeScreen')}>
                <Image
                    style={{ height: 60, width: 60,margin:10,marginRight:-5 }}
                    source={require('../assets/home_button.png')}
                    />
                    </Pressable>
            </View>
              
            </SafeAreaView>
            </ImageBackground>
           
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  board: {
      margin: 40,
      
  },
  row: {
      flexDirection: 'row',
      backgroundColor:'#e0da10'
  },
  square: {
    width: 80,
    height: 80,
    backgroundColor: '#4d979a',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    
    },
    resetButton: {
        backgroundColor: '#e0da10',
        borderRadius: 10,
        height: 30,
        width:90,
    },
    resetButtonText: {
        textAlign: 'center',
        marginTop: 7,
        fontFamily:'Outfit-Light'
    },
});

export default Games;