import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { styled } from 'nativewind';
import {  StarIcon } from "react-native-heroicons/solid";
import {  MapPinIcon } from "react-native-heroicons/outline";


const StyledText = styled(Text);
const StyledView = styled(View);
const StyledScrollView = styled(ScrollView);
const StyledImage = styled(Image);

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <StyledImage 
    source={{ uri: imgUrl, }} className="h-36 w-64 rounded-sm"
      />
      <StyledView className='px-3 pb-4'>
        <StyledText className='font-bold text-lg pt-2'>{title}</StyledText>
        <StyledView  className='flex-row items-center space-x-1'>
          <StarIcon color="green" opacity={0.5} size={22}/>
           <StyledText className='text-xs text-gray-500'>
            <StyledText className='text-green-500'>{rating}
            </StyledText>
            .{genre}
            </StyledText>
              </StyledView>
          <StyledView className='flex-row items-center space-x-1'>
                  <MapPinIcon color="gray" opacity={0.4} size={22} />
                <StyledText className='text-xs text-gray-500' >Nearby .{address}</StyledText>
        </StyledView>
        </StyledView>
    </TouchableOpacity>
  )
}

export default RestaurantCard