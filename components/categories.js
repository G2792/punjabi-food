import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { styled } from 'nativewind';
import CategoriesCard from '../components/CategoryCard';



const StyledScrollView = styled(ScrollView); 

const Categories = () => {
  return (
    <StyledScrollView contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,}}
      horizontal
    showsHorizontalScrollIndicator={false}>
        <CategoriesCard imgUrl="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3293449/settings_images/3DQ6jYtpQLy6njXpZRot_file.jpg" title="Testing 1"/>
        <CategoriesCard imgUrl="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3293449/settings_images/3DQ6jYtpQLy6njXpZRot_file.jpg" title="Testing 2" />
        <CategoriesCard imgUrl="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3293449/settings_images/3DQ6jYtpQLy6njXpZRot_file.jpg" title="Testing 3" />
        <CategoriesCard imgUrl="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3293449/settings_images/3DQ6jYtpQLy6njXpZRot_file.jpg" title="Testing 4" />
        <CategoriesCard imgUrl="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3293449/settings_images/3DQ6jYtpQLy6njXpZRot_file.jpg" title="Testing 5" />
        <CategoriesCard imgUrl="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3293449/settings_images/3DQ6jYtpQLy6njXpZRot_file.jpg" title="Testing 6" />
        <CategoriesCard imgUrl="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3293449/settings_images/3DQ6jYtpQLy6njXpZRot_file.jpg" title="Testing 7" />
           </StyledScrollView>
    
  );
};

export default Categories