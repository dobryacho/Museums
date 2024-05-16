import { Button } from '@chakra-ui/react'
import { Link, Outlet } from "react-router-dom";


  
export default function AllMuseums() {


  return (
    <>
      <Link to='list'>
        <Button colorScheme="green" margin='2px'>Список</Button>
      </Link>
      <Link to='map'>
        <Button colorScheme="green" margin='2px'>Карта</Button>
      </Link>

      <div style={{ padding: 10, border: '1px solid white' }}>
        <Outlet />
      </div>
    </>
  )
}