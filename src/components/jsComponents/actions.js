import patterns from './patterns';

export const onInfoChange = (currentValue, id) => {
  if ((patterns[id] && currentValue.match(patterns[id])) || !patterns[id]) {
    return {
      type: id,
      field: id,
      payload: { [id]: currentValue },
    };
  }
};

export const onEduSubmit = (event) => {
  event.preventDefault();
  return { type: 'eduSubmit' };
};

export const onDeleteEdu = (type, payload) => {
  return { type, payload };
};

export const onExpSubmit = (event) => {
  event.preventDefault();
  return { type: 'expSubmit' };
};

export const onDeleteExp = (type, payload) => {
  return { type, payload };
};

export const onProjSubmit = (event) => {
  event.preventDefault();
  return { type: 'projSubmit' };
};

export const onDeleteProj = (type, payload) => {
  return { type, payload };
};
