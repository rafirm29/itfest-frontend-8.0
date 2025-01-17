import services from '.';
import API from '../config/api';

export const register = async () => {
  const res = await services.get(API.user.register);

  return res.data;
};

export const login = async () => {
  const res = await services.get(API.user.login);

  return res.data;
};

export const home = async () => {
  const res = await services.get(API.user.home);

  return res.data;
};

export const profile = async () => {
  const res = await services.get(API.user.profile);

  return res.data;
};