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


const CustomRadioButton = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={styles.radioContainer}
          onPress={() => handleSelect(option.value)}
        >
          <View style={styles.radioCircle}>
            {selectedOption === option.value && <View style={styles.selectedRb} />}
          </View>
          <Text>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};


const RechargeWithdraw = () => {
  const [selectedItem, setSelectedItem] = useState('VND');

  const renderContent = () => {
    switch (selectedItem) {
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
  const options = [
      { label: '', value: 'option1' },

    ];
    const handleSelection = (value) => {
      console.log('Selected value:', value);
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
                <View className='flex-row bg-[#fcf4f4] w-[110px] h-[55px] p-2 justify-between rounded-[10px]'>
                    <View className='justify-center'>
                        <LogoAppIC/>
                    </View>
                    <View className=' justify-center'>
                        <Text>VNĐ</Text>
                        <Text className='text-[12px]'>5.000.000Đ</Text>
                    </View>
                </View>
                <View className='flex-row bg-[#fcf4f4] w-[110px] h-[55px] p-2 justify-between rounded-[10px]'>
                    <View className='justify-center'>
                        <UsdPPIC/>
                    </View>
                    <View className=' justify-center'>
                        <Text>USD</Text>
                        <Text className='text-[12px]'>888.888$</Text>
                    </View>
                </View>
                <View className='flex-row bg-[#fcf4f4] w-[110px] h-[55px] p-2 justify-between rounded-[10px]'>
                    <View className='justify-center'>
                        <ETHMiniIC/>
                    </View>
                    <View className=' justify-center'>
                        <Text>Ether</Text>
                        <Text className='text-[12px]'>77.777 ETH</Text>
                    </View>
                </View>
                
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
            <TouchableOpacity className='w-full border-[2px] border-[#0094ff] px-2 py-3 flex-row rounded-xl '>
                <View className='justify-center'>
                    <VisaMiniIC/>
                </View>
                <View className='flex-row w-full justify-between'>
                    <View className='ml-3'>
                        <Text className='font-bold text-[16px]'>Visa</Text>
                        <Text className='text-[#9c9c9c] text-[12px]'>Miễn phí thanh toán</Text>
                    </View>
                    <View className='justify-center mr-10'>
                    <CustomRadioButton options={options} onSelect={handleSelection} />
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity className='w-full border-[2px] border-[#8d8d8d] px-2 py-3 flex-row rounded-xl mt-2'>
                <View className='justify-center'>
                    <VisaMiniIC/>
                </View>
                <View className='flex-row w-full justify-between'>
                    <View className='ml-3'>
                        <Text className='font-bold text-[16px]'>Visual Studio</Text>
                        <Text className='text-[#9c9c9c] text-[12px]'>Miễn phí lập trình </Text>
                    </View>
                    <View className='justify-center mr-10'>
                    <CustomRadioButton options={options} onSelect={handleSelection} />
                    </View>
                </View>
            </TouchableOpacity>
            <View className='flex-row justify-end items-center mt-3'>
              <AddCardIC/>
              <Text className='ml-3 font-bold'>Thêm thẻ</Text>
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
                    selectedItem === 'VND' && styles.selectedItem,
                  ]}
                  onPress={() => setSelectedItem('VND')}
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
                    selectedItem === 'USD' && styles.selectedItem,
                  ]}
                  onPress={() => setSelectedItem('USD')}
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
                    selectedItem === 'ETH' && styles.selectedItem,
                  ]}
                  onPress={() => setSelectedItem('ETH')}
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
              <View style={styles.contentContainer}>{renderContent()}</View>
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
      style={{ height: '100%', width: '100%' }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={["#0094FF", "#F2F2F2"]}
      locations={[0, 0.3]}
    >
      <View style={{ width: '100%' }}>
        <View style={{alignItems: 'center', paddingTop: 66, }}>
        <Text className='text-white text-xl font-semibold'>Nạp/Rút</Text>
        </View>
        <View style={{ backgroundColor: 'white', width: '100%', height: '100%', marginTop: 10 }}>
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
                      
                          {route.title1 }
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
  radioContainer: {
    flexDirection: 'row',
  },
  radioCircle: {
    height: 15,
    width: 15,
    borderRadius: 12,
    borderWidth: 2.5,
    borderColor: '#0094ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 5,
    height: 5,
    borderRadius: 6,
    backgroundColor: '#0094ff',
  },
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
})

export default RechargeWithdraw;
