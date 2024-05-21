import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function DelBtn({id}: {id: number}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  const navigate = useNavigate();

const handlerConfirm = () => {
  axios.delete(`http://localhost:3000/api/museums/${id}`)
  onClose();
  navigate("/allmuseums/list");
}

  return (
    <>
      <Button colorScheme='red' onClick={onOpen}>
        Удалить музей
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Удалить музей
            </AlertDialogHeader>

            <AlertDialogBody>
              Вы уверены? Это действие нельзя будет отменить
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Отмена
              </Button>
              <Button colorScheme='red' onClick={handlerConfirm} ml={3}>
                Удалить
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default DelBtn;