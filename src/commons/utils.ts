export const getIdentifiers = (id: string) => {
  return {
    id,
    className: id,
    "data-testid": id
  };
};
