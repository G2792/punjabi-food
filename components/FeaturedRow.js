import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { styled } from 'nativewind';
import {  ArrowRightIcon} from "react-native-heroicons/outline";
import RestaurantCard from './RestaurantCard';


const StyledText = styled(Text);
const StyledView = styled(View);
const StyledScrollView = styled(ScrollView);

const FeaturedRow = ({id, title, description}) => {
  return (
  <StyledView>
    <StyledView className="mt-4 flex-row items-center justify-between px-4">
         <StyledText className='font-bold text-lg'>
            {title}
         </StyledText>
         <ArrowRightIcon color="#00CCBB"/>
    </StyledView>
    <StyledText className='text-xs text-gray-500 px-4'>
            {description}
         </StyledText>
         
         <StyledScrollView   horizontal 
         contentContainerStyle={{
        paddingHorizontal: 15,}}
    showsHorizontalScrollIndicator={false} className="pt-4">
    
    <RestaurantCard   
    id={123}
  imgUrl="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3293449/settings_images/3DQ6jYtpQLy6njXpZRot_file.jpg"
  title="Yo! Sushi"
  rating={4.5}
  genre="Japanese"
  address="2515 taft ave"
  short_description="This is a Test description"
  dishes={[]}
  long={20}
  lat={0}
  />
    <RestaurantCard   
    id={123}
  imgUrl="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3293449/settings_images/3DQ6jYtpQLy6njXpZRot_file.jpg"
  title="Yo! Sushi"
  rating={4.5}
  genre="Japanese"
  address="2515 taft ave"
  short_description="This is a Test description"
  dishes={[]}
  long={20}
  lat={0}
  />
    <RestaurantCard   
    id={123}
  imgUrl="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3293449/settings_images/3DQ6jYtpQLy6njXpZRot_file.jpg"
  title="Yo! Sushi"
  rating={4.5}
  genre="Japanese"
  address="2515 taft ave"
  short_description="This is a Test description"
  dishes={[]}
  long={20}
  lat={0}
  />
    <RestaurantCard   
    id={123}
  imgUrl="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3293449/settings_images/3DQ6jYtpQLy6njXpZRot_file.jpg"
  title="Yo! Sushi"
  rating={4.5}
  genre="Japanese"
  address="2515 taft ave"
  short_description="This is a Test description"
  dishes={[]}
  long={20}
  lat={0}
  />
         </StyledScrollView>
  </StyledView>
  )
}

export default FeaturedRow