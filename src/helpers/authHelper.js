const checkUserToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return false;
  return true;
};

const beforeEnter = (to, from, next) => {
  if (!checkUserToken()) {
    return next('/login');
  }
  return next();
};

export default {
  beforeEnter,
};
