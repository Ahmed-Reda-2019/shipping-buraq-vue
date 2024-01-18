import { computed } from "vue";

export interface ICountry {
  id: number;
  name: JSON;
  iso_code: string;
  phone_code: string;
  status: number;
}

export interface ICounty {
  id: number;
  name: JSON;
  country_id: number;
  status: number;
}

export interface IArea {
  id: number;
  name: JSON;
  county_id: number;
  status: number;
}
