var crypto = require('crypto')
  , debug = require('debug')('api-auth')
  , auth_salt = '_ugc1.0';

/**
 * @description Authenticate the request 
 * @param req
 * @note 'userid' & 'apikey' are to be passed as HTTP headers 
 */
authenticate = function(req, fn) {
  try {
	debug(req.url.indexOf('/dashboard')); // @@@@
	if(req.url.indexOf('/dashboard') !== 0) {
	  debug(req.url); // @@@@
	  if(req.headers.userid && req.headers.apikey) {
	    if( (crypto.createHash('md5').update(req.headers.userid+auth_salt).digest('hex') != req.headers.apikey) ) {
	  	  // auth failed
            fn(0);
	        return;
        }
	  }
      else {
        // userid (or) apikey missing 
    	fn(-1);
    	return;
      }
	}
  }
  catch (exp) {
	  // some exception
      fn(-2);
      return;
  }
  // success
  fn(1);
  return;
};