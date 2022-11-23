import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import { 
  UserIcon,
ChevronDownIcon,
AdjustmentsVerticalIcon,
MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from '../components/categories';
import FeaturedRow from '../components/FeaturedRow';


const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledScrollView = styled(ScrollView);

const HomeScreen = () => {
  const navigation = useNavigation();



  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView  className='bg-white pt-5'>
    
        {/* Header*/ }
        <StyledView className='flex-row pb-3 items-center mx-4 space-x-2'>
        <StyledImage  
          source={{
             uri: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3293449/settings_images/3DQ6jYtpQLy6njXpZRot_file.jpg",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <StyledView className='flex-1' >
            <StyledText className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </StyledText>
            <StyledText className="font-bold text-xl">
              Current Location 
              <ChevronDownIcon sixe={20} color="#00CCBB" />   
            </StyledText>
          </StyledView>

          <UserIcon size={35} color="#00CCBB" />
        </StyledView>
      
      <StyledView  className='flex-row items-center space-x-2 pb-2 mx-4'>
        <StyledView className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
        <MagnifyingGlassIcon color="gray" size={20}/>
      <TextInput placeholder='Restaurants and cuisines'
      keyboardType='default' />
      </StyledView>

         <AdjustmentsVerticalIcon color="#00CCBB"/>
        </StyledView>

      <StyledScrollView className='bg-gray-100' contentContainerStyle={{ paddingBottom: 100, }}>
        <Categories />

        <FeaturedRow title="Featured" description="Paid placements from our partners"
        id="123" />
         <FeaturedRow title="Tasty Discount" description="Paid from our partners"
        id="1234"
        />  
        <FeaturedRow title="Offers near you" description=" placements from our partners"
        id="12345"      />
       </StyledScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;