const exportJSONFile = (obj) => {
  const dataStr = JSON.stringify(obj);
  const dataUri = `data:application/json;charset=utf-8,
  ${encodeURIComponent(dataStr)}`;
  const exportFileDefaultName = 'users.json';

  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
};

export default exportJSONFile;
