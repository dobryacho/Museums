import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, MenuButton, MenuList, MenuItem, Button, Flex, Image } from '@chakra-ui/react';
import { useAppDispatch } from '../../redux/hooks';
import { setLanguage } from '../../redux/languageSlice';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    dispatch(setLanguage(lng));
  };

  const getFlagSrc = (language) => {
    switch (language) {
      case 'ru':
        return '../Rus_flag.png';
      case 'en':
        return '../GB_flag.png';
      case 'de':
        return '../De_flag.png';
      default:
        return '../Rus_flag.png';
    }
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<span>▼</span>}>
      <Image src={getFlagSrc(i18n.language)} alt={i18n.language} boxSize="20px" />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => changeLanguage('ru')}>
          <Flex align="center">
            <Image src="../Rus_flag.png" alt="Русский" boxSize="20px" mr="12px" />
            Русский
          </Flex>
        </MenuItem>
        <MenuItem onClick={() => changeLanguage('en')}>
          <Flex align="center">
            <Image src="../GB_flag.png" alt="English" boxSize="20px" mr="12px" />
            English
          </Flex>
        </MenuItem>
        <MenuItem onClick={() => changeLanguage('de')}>
          <Flex align="center">
            <Image src="../De_flag.png" alt="Deutsch" boxSize="20px" mr="12px" />
            Deutsch
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LanguageSwitcher;
