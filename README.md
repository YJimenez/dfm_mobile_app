###To run project on ios
Install Xcode

Open up your Terminal.app

Install meteor
```
curl https://install.meteor.com/ | sh
```

Download this repo
```
git clone git@github.com:kozlowskij/dfm_mobile_app.git
```

Run the app
```
cd dfm_mobile_app
meteor run ios
```

###To run project on Android

Once you've followed the "Download this repo" in the iOS instructions above and are in the project folder

Run

```
meteor install-sdk android
```

Follow any directions issues after the SDK is installed (adding haxm)

Run the app

```
meteor run android
```


Useful instructions here:

https://github.com/meteor/meteor/wiki/Meteor-Cordova-Phonegap-integration


###To compile jsx files
```
npm install -g react-tools
jsx -x jsx --strip-types --harmony --watch .src/ build/
```

See http://flowtype.org/docs/running.html#_
