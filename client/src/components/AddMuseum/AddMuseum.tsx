import { Textarea } from '@chakra-ui/react'
import React from 'react'

export default function AddMuseum() {
  return (
    <>
    {/* <Textarea value={value} onChange={handleInputChange} placeholder='Название музея' /> */}
    <Textarea placeholder='Описание' />
    <Textarea placeholder='Город' />
    <Textarea placeholder='Адрес' />
    <Textarea placeholder='Фото' />
    <Textarea placeholder='Время работы' />
    <Textarea placeholder='Выходные' />
    <Textarea placeholder='Тематика' />
    <Textarea placeholder='Координаты' />
    </>
  )
}
