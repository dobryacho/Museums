import { Button } from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

export default function AllMuseums() {
  const { t } = useTranslation();

  return (
    <>
      <Link to="list">
        <Button colorScheme="green" margin="2px">
          {t('list')}
        </Button>
      </Link>
      <Link to="map">
        <Button colorScheme="green" margin="2px">
          {t('map')}
        </Button>
      </Link>

      <div style={{ padding: 10, border: '1px solid white' }}>
        <Outlet />
      </div>
    </>
  );
}
