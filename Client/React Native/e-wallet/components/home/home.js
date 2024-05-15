import {  Text, View, TextInput, Button, Image,Pressable } from 'react-native';

export default function Home(){
  return(
    <View className='w-[90%] mx-auto mt-20'>
      <View style={{
        flex:1,
        flexDirection:'row'
      }}>
        <TextInput className='rounded-md border w-[70%] h-[20px] '></TextInput>
          <Pressable className="bg-orange-400 w-[10%]" >
              Button
          </Pressable>
          <Image  style={{ width: 200, height: 200 }} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/HTML5_logo_resized.svg/1200px-HTML5_logo_resized.svg.png'}}/>
      </View>

  </View>
  )
}

