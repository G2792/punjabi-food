import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styled } from 'nativewind';

const StyledText = styled(Text);
const StyledImage = styled(Image);

const CategoryCard = ( {imgUrl, title}) => {
  return (
   
 <TouchableOpacity className="relative mr-2">
    <StyledImage source={{ uri: imgUrl }} className="h-20 w20 rounded"/>
 <StyledText className=" bottom-1 left-1 text-white font-bold">
   {title}
 </StyledText>
</TouchableOpacity >
  )
}

export default CategoryCard