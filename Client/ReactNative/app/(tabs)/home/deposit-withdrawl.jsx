import React, { useState } from "react";
import { Text, View, TextInput, useWindowDimensions, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import RechargeIC from "../../../assets/svg/ic_recharge.svg"
import LogoAppIC from "../../../assets/svg/ic_logoApp.svg"
import UsdPPIC from "../../../assets/svg/ic_USDpp.svg"
import ETHMiniIC from "../../../assets/svg/ic_ETHmini.svg"
import AddCardIC from "../../../assets/svg/ic_addCard.svg"
import VisaMiniIC from "../../../assets/svg/ic_Visamini.svg"
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Link } from "expo-router";




const RechargeWithdraw = () => {
  const [selectedItem, setSelectedItem] = useState('Recharge-VND');

  const renderContent = () => {
    switch (selectedItem) {
      case 'Recharge-VND':
        return <Text>0VNĐ</Text>;
      case 'Recharge-USD':
        return <Text>0$</Text>;
      case 'Recharge-ETH':
        return <Text>0ETH</Text>;
      default:
        return <Text>Chọn một mục</Text>;
    }
  };
  const [selectedItem1, setSelectedItem1] = useState('Visa');
  const renderContent1 = () => {
    switch (selectedItem1) {
      case 'Visa':
        return <Text>1 Jack</Text>;
      case 'Visual':
        return <Text>1 Visual</Text>;
      default:
        return <Text>Chọn một mục</Text>;
    }
  };
  const [selectedItem2, setSelectedItem2] = useState('VND');

  const renderContent2 = () => {
    switch (selectedItem2) {
      case 'VND':
        return <Text>Số dư trên ví pressPay của bạn là 5.000.000đ</Text>;
      case 'USD':
        return <Text>Số dư trên ví USD của bạn là 888.888$</Text>;
      case 'ETH':
        return <Text>Số dư trên ví Ether của bạn là 77.777ETH</Text>;
      default:
        return <Text>Chọn một mục</Text>;
    }
  };

  const [text, setText] = useState("");
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([ 
    { key: 'first', title1: 'Nạp tiền' },
    { key: 'second', title2: 'Rút tiền' },

  ]);
  const [value, setValue] = useState('');

  const handleChangeText = (text) => {
    const numericText = text.replace(/[^0-9]/g, ''); // Loại bỏ các ký tự không phải số
    const formattedText = formatNumber(numericText); // Định dạng số
    setValue(formattedText);
  };

  const formatNumber = (num) => {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Thêm dấu chấm vào số
  };

  const FirstRoute = () => (
    <View className='h-full'>
      <View className='p-4 bg-gray-200 h-[63%]'>
        <View className='bg-white w-full h-[195px] p-3 rounded-[10px]'>
            <Text className='font-semibold text-[15px] mb-2'>
                Nạp tiền
            </Text>
            <View className='flex-row justify-between'>
            <TouchableOpacity
                  style={[
                    styles.touchable,
                    selectedItem === 'Recharge-VND' && styles.selectedItem,
                  ]}
                  onPress={() => setSelectedItem('Recharge-VND')}
                >
                  <View className='justify-center'>
                        <LogoAppIC/>
                    </View>
                    <View className=' justify-center'>
                        <Text>VNĐ</Text>
                        <Text className='text-[12px]'>5.000.000Đ</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.touchable,
                    selectedItem === 'Recharge-USD' && styles.selectedItem,
                  ]}
                  onPress={() => setSelectedItem('Recharge-USD')}
                >
                  <View className='justify-center'>
                        <UsdPPIC/>
                    </View>
                    <View className=' justify-center'>
                        <Text>USD</Text>
                        <Text className='text-[12px]'>888.888$</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.touchable,
                    selectedItem === 'Recharge-ETH' && styles.selectedItem,
                  ]}
                  onPress={() => setSelectedItem('Recharge-ETH')}
                >
                  <View className='justify-center'>
                        <ETHMiniIC/>
                    </View>
                    <View className=' justify-center'>
                        <Text>Ether</Text>
                        <Text className='text-[12px]'>77.777 ETH</Text>
                    </View>
                </TouchableOpacity>
                
            </View>
            <View className='mt-2'>
                <Text className='p-2'>Số tiền cần nạp</Text>
            </View>
            <View className='h-[50px] border-[1px] border-[rgb(194,194,194)] rounded-[10px] justify-center relative'>
              
                <TextInput
                
                    className='pl-7 text-[20px]'
                    placeholder="0Đ"
                    value={value}
                    onChangeText={handleChangeText}
                    keyboardType="numeric" // Đảm bảo hiển thị bàn phím số
                >
                {value !== '' && <Text style={styles.currency}>Đ</Text>}

                </TextInput>
            </View>

        </View>
        <View className='py-2 mt-4'>
            <Text className='text-[16px] font-semibold'>
                Chọn nguồn tiền</Text>
        </View>
        <View className='bg-white h-[190px] p-3 rounded-[10px]'>
                 <TouchableOpacity
                  style={[
                    styles.touchable1,
                    selectedItem1 === 'Visa' && styles.selectedItem,
                  ]}
                  onPress={() => setSelectedItem1('Visa')}
                >
                  <View className='justify-center'>
                        <VisaMiniIC/>
                    </View>
                    <View className=' justify-center'>
                    <View className='ml-3'>
                        <Text className='font-bold text-[16px]'>Visa</Text>
                        <Text className='text-[#9c9c9c] text-[12px]'>Miễn phí thanh toán</Text>
                    </View>
                    </View>
                </TouchableOpacity>
            
                <TouchableOpacity
                  className='mt-2'
                  style={[
                    styles.touchable1,
                    selectedItem1 === 'Visual' && styles.selectedItem,
                  ]}
                  onPress={() => setSelectedItem1('Visual')}
                >
                  <View className='justify-center'>
                        <VisaMiniIC/>
                    </View>
                    <View className=' justify-center'>
                    <View className='ml-3'>
                        <Text className='font-bold text-[16px]'>Visual</Text>
                        <Text className='text-[#9c9c9c] text-[12px]'>Miễn phí lập trình</Text>
                    </View>
                    </View>
                </TouchableOpacity>
                <View className='flex-row justify-end items-center mt-3'>
                    <AddCardIC/>

                    <Link href='' className='ml-3 font-bold' >
                    Thêm thẻ
                     </Link>
                </View>
            
            
        </View>
        
      </View>
      
      <View className='bg-white flex flex-row justify-between py-4 px-4'>
          <TouchableOpacity className='w-full'>
              <View className="w-full bg-[#0094FF] h-[60px] flex-row items-center justify-center rounded-xl">
                  <Text className="text-white text-[20px] text-center font-bold">Nạp tiền</Text>
              </View>
          </TouchableOpacity>
      </View>
    </View>

  );

  const SecondRoute = () => (
    <View className='h-full'>
      <View className='p-4 bg-gray-200 h-[65%] '>
        <View className='bg-white w-full h-[195px] p-3 rounded-[10px]'>
            <Text className='font-semibold text-[15px] mb-2'>
                Rút tiền
            </Text>
            <View className='flex-row justify-between'>

            <View>
              <View className='flex-row justify-between w-full'>
                
                <TouchableOpacity
                  style={[
                    styles.touchable,
                    selectedItem2 === 'VND' && styles.selectedItem,
                  ]}
                  onPress={() => setSelectedItem2('VND')}
                >
                  <View className='justify-center'>
                        <LogoAppIC/>
                    </View>
                    <View className=' justify-center'>
                        <Text>VNĐ</Text>
                        <Text className='text-[12px]'>5.000.000Đ</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.touchable,
                    selectedItem2 === 'USD' && styles.selectedItem,
                  ]}
                  onPress={() => setSelectedItem2('USD')}
                >
                  <View className='justify-center'>
                        <UsdPPIC/>
                    </View>
                    <View className=' justify-center'>
                        <Text>USD</Text>
                        <Text className='text-[12px]'>888.888$</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.touchable,
                    selectedItem2 === 'ETH' && styles.selectedItem,
                  ]}
                  onPress={() => setSelectedItem2('ETH')}
                >
                  <View className='justify-center'>
                        <ETHMiniIC/>
                    </View>
                    <View className=' justify-center'>
                        <Text>Ether</Text>
                        <Text className='text-[12px]'>77.777 ETH</Text>
                    </View>
                </TouchableOpacity>
                
              </View>
              <View className='mt-2'>
                <Text className='p-2'>Nhập địa chỉ ví</Text>
            </View>
              <View style={styles.contentContainer}>{renderContent2()}</View>
            </View>
  
                
            </View>
            
        </View>
      </View>
      <View className='bg-white flex flex-row justify-between py-4 px-4'>
          <TouchableOpacity className='w-full'>
              <View className="w-full bg-[#0094FF] h-[60px] flex-row items-center justify-center rounded-xl">
                  <Text className="text-white text-[20px] text-center font-bold">Rút tiền</Text>
              </View>
          </TouchableOpacity>
      </View>
    </View>
  );



  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <LinearGradient
      style={{ height: '100%', width: '100%' , backgroundColor: 'blue'}}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={["#0094FF", "#F2F2F2"]}
      locations={[0, 0.3]}
    >
      <View className='h-full w-full'>
        <View style={{alignItems: 'center', paddingTop: 66, }}>
        <Text className='text-white text-xl font-semibold'>Nạp/Rút</Text>
        </View>
        <View style={{ backgroundColor: 'red', width: '100%', height: '100%', marginTop: 10}}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={props => (
              <TabBar
                {...props}
                indicatorStyle={{ backgroundColor: '#0D99FF', height: 2 }}
                renderLabel={({ route }) => (
                  <Text className='text-[15px] items-center justify-center'>
                    <Text>
                      <View>
                        <RechargeIC/>
                      </View>
                          {route.title1}
                          {route.title2}
                    </Text>           
                  </Text>
                )}
                style={{ backgroundColor: 'white' }}
              />
            )}
          />
        </View>
      </View>
    </LinearGradient>
  );
}; 

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 5,
  },
  selectedItem: {
    borderColor: '#0094ff',
  },
  contentContainer: {
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#0094ff',
    width: '100%',
    alignItems: 'center',
    borderRadius: '10'
  },
  currency: {
    fontSize: 20,
    color: '#8d8d8d',
    
  },

  touchable: {
    flexDirection: 'row',
    backgroundColor: '#fcf4f4',
    borderColor: '#fff5f5',
    borderWidth: 1,
    width: 110,
    height: 55,
    padding: 8,
    justifyContent: 'space-between',
    borderRadius: 10,
  },

  touchable1: {
    flexDirection: 'row',
    borderColor: '#c8c8c8',
    borderWidth: 2,
    width: 'auto',
    height: 60,
    padding: 8,
    borderRadius: 12,
  },
})

export default RechargeWithdraw;
