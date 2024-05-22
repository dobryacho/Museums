import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import { useAppSelector } from '../../redux/hooks';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const piter = { center: [59.938573235606746, 30.323395361055585], zoom: 11 };
const moscow = { center: [55.75, 37.57], zoom: 11 };

type TopLevel = {
  id: number;
  name: string;
  description: string;
  location: string;
  city: string;
  photo: string;
  workedTime: string;
  holidays: string;
  theme: string;
  coordinates: string;
  createdAt: Date;
  updatedAt: Date;
};

function MapMuseuns() {
  const { t, i18n } = useTranslation();
  // удалить
  const [allMuseums, setAllMuseums] = useState<TopLevel[]>([]);

  useEffect(() => {
    axios.get<TopLevel[]>(`http://localhost:3000/api/museums?lang=${i18n.language}`).then((res) => {
      setAllMuseums(res.data);
    });
  }, [i18n.language]);
  // удалить

  const user = useAppSelector((store) => store.userSlice.user);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (allMuseums?.length) {
      setLoad(true);
    }
  }, [allMuseums]);

  return (
    <>
      {load ? (
        <YMaps>
          <Map
            defaultState={user?.city === 'petersburg' ? piter : moscow}
            width={'90%'}
            height={700}
          >
            <Placemark modules={['geoObject.addon.balloon']} />
            {allMuseums.map((el) => (
              <Placemark
                key={`map${el.id}`}
                defaultGeometry={
                  el.coordinates.match(/\d*\.\d*/gi) || moscow.center
                }
                properties={{
                  balloonContentHeader: `<a href='/allmuseums/${el.id}'><b>${el.name}</b></a>`,
                  balloonContentBody: `
                  <a href='/allmuseums/${el.id}'>
                    <img src="${el.photo}" style="width: 100px;height: auto;" align="left" vspace="5" hspace="5"/>
                  </a>                  
                  <p>${el.description}</p>                  
                `,
                  balloonContentFooter: `<p>время работы: ${el.workedTime}</p>`,
                }}
              />
            ))}
          </Map>
        </YMaps>
      ) : (
        <div>{t('loading')}</div>
      )}
    </>
  );
}

export default MapMuseuns;
