var __ENVIRONMENT__ = 'production'
  , __CONFIG__ = {
		    "production": {
		        "port": 5000,
		        "env": "production",
		        "db": {
		            "host": "a.b.c.d",
		            "port": 27017,
		            "name": "fuel_db"
		        }
		    }
		    ,"pre-production": {
		        "port": 5000,
		        "env": "pre-production",
		        "db": {
		            "host": "localhost",
		            "port": 27017,
		            "name": "fuel_db"
		        }
		    }
		    ,"development": {
		        "port": 5001,
		        "env": "development",
		        "db": {
		            "host": "localhost",
		            "port": 27017,
		            "name": "ugc_deployd"
		        }
		    }		    
		};

module.exports.__ENVIRONMENT__ = __ENVIRONMENT__;
module.exports.__CONFIG__ = __CONFIG__;
