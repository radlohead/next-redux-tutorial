const checkSignInStatus = (reqDataObj: any) => ({
    type: 'checkSignInStatus',
    id: reqDataObj.id
  });
  
  module.exports = {
    checkSignInStatus
  };