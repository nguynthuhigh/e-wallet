import {  Text, View,Image,Pressable,StyleSheet,ScrollView } from 'react-native';
import Bg_Blue from '../../assets/bg_blue.svg'
import Gray_1 from '../../assets/svg/gray_acc_1.svg'
import Gray_2 from '../../assets/svg/gray_acc_2.svg'
import RefIcon from '../../assets/svg/ref.svg'
import QrCode from '../../assets/svg/qr_code_acc.svg'
import Card from '../../assets/svg/card.svg'
import Arrow_More from '../../assets/svg/arrow_more.svg'
import ETH from '../../assets/svg/eth.svg'
import {LinearGradient} from 'expo-linear-gradient';
export default function Account(){
  return(
    <LinearGradient className="h-full w-full" start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#0094FF','#F2F2F2']}  locations={[0, 0.3]} style={{fontFamily:'inter'}}> 
        <ScrollView>
          <View className=' p-4 w-full'>
          <View >
              <View className="w-full mt-12 drop-shadow-xl">
                <View className="w-fit flex items-center top-[-30] justify-center z-10 mx-auto">
                  <View className=" bg-white rounded-full w-[80px] h-[80px]"/>
                  <Image
                      className="rounded-full absolute"
                      style={{ width: 70, height: 70 }}
                      source={{uri: 'https://reactjs.org/logo-og.png'}}
                    />
                </View>
                <View className="w-full absolute rounded-xl h-[150px] bg-white flex-col items-center">
                  <View className="w-full mt-[47px] ">
                    <Text className="w-fit font-bold text-center text-[20px]">Elon Musk</Text>
                    <View className="w-fit mx-auto flex-row">
                      <Text className=" text-[15px]">0369889XXX</Text>
                      <View className="bg-[#53C41C] text-[10px] items-center flex-row    rounded-full"><Text className="text-[10px] text-white mx-[2px]">Đã xác thực</Text></View>
                    </View>
                    {/* <View style={styles.container}>
                      <View style={styles.row}>
                        <Gray_1 width="208" height="38" />
                        <Gray_2 style={styles.mlAuto} width="208" />
                      </View>
                    </View> */}
                    <View className="flex-row mt-5">
                        <View className="flex-row justify-center items-center w-[50%]">
                          <View className="z-10 flex-row justify-center items-center">
                            <QrCode />
                            <Text className="font-bold text-[13px] ">Trang cá nhân</Text>
                          </View>
                          {/* <View style={styles.triangleCorner}></View> */}
                        </View>
                        <View className="flex-row justify-center items-center w-[50%]">
                          <RefIcon/>
                          <Text className="font-bold text-[13px]">Trang cá nhân</Text>
                          {/* <View style={styles.triangleCornerRight}></View> */}

                        </View>
                    </View>
                  </View>
                </View>
              </View>
              <View className="mt-[60px] ">
                <Text className="font-bold text-[20px] my-4">Cài đặt</Text>
                <View className="w-full rounded-t-xl bg-white p-4">
                    <View className="flex-row w-full my-3">
                      <Card className="ml-2"></Card>
                      <Text className="ml-5 font-bold text-[14px]">Quản lí tài khoản/thẻ</Text>
                      <View className="ml-auto">
                        <Arrow_More ></Arrow_More>
                      </View>
                    </View>
                    <View className="flex-row w-full my-3">
                      <Card className="ml-2"></Card>
                      <Text className="ml-5 font-bold text-[14px]">Quản lí tài khoản/thẻ</Text>
                      <View className="ml-auto">
                        <Arrow_More ></Arrow_More>
                      </View>
                    </View>
                    <View className="flex-row w-full my-3">
                      <Card className="ml-2"></Card>
                      <Text className="ml-5 font-bold text-[14px]">Quản lí tài khoản/thẻ</Text>
                      <View className="ml-auto">
                        <Arrow_More ></Arrow_More>
                      </View>
                    </View>
                    <View className="flex-row w-full my-3">
                      <Card className="ml-2"></Card>
                      <Text className="ml-5 font-bold text-[14px]">Quản lí tài khoản/thẻ</Text>
                      <View className="ml-auto">
                        <Arrow_More ></Arrow_More>
                      </View>
                    </View>
                    
                </View>
                <Text className="font-bold text-[20px] my-4">Tiện ích</Text>
                <View className="w-full rounded-t-xl bg-white p-4">
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>

                </View>
              </View>
          </View>
          </View>
        
          
        </ScrollView>
    </LinearGradient>
  )
}
const Item = ()=>{
  return (
    <View className="flex-row w-full my-3">
    <ETH className="ml-2"></ETH>
    <Text className="ml-5 font-bold text-[14px]">Mua Ethereum</Text>
    <View className="ml-auto">
      <Arrow_More ></Arrow_More>
    </View>
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
  },
  mlAuto: {
    marginLeft: 'auto',
  },
  triangleCorner: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'transparent',
    borderRightWidth: 25,
    borderBottomWidth: 45,
    borderRightColor: 'transparent',
    borderBottomColor: '#F2F2F2',
    borderRadius:5
  },
  triangleCornerRight: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'transparent',
    borderLeftColor: 25,
    borderTopWidth: 45,
    borderLeftColor: 'transparent',
    borderTopColor: '#F2F2F2',
    borderRadius:5
  }
});

