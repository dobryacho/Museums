export interface UserMuseums {
  id:              number;
  email:           string;
  firstName:       string;
  lastName:        string;
  password:        string;
  city:            string;
  phone:           string;
  createdAt:       Date;
  updatedAt:       Date;
  visitedMuseums:  VisitedMuseum[];
  recalledMuseums: any[];
}

export interface VisitedMuseum {
  id:            number;
  name:          string;
  description:   string;
  location:      string;
  city:          string;
  photo:         string;
  workedTime:    string;
  holidays:      string;
  theme:         string;
  coordinates:   string;
  createdAt:     Date;
  updatedAt:     Date;
  VisitedMuseum: VisitedMuseumClass;
}

export interface VisitedMuseumClass {
  id:        number;
  userId:    number;
  museumId:  number;
  rating:    null;
  createdAt: Date;
  updatedAt: Date;
}
