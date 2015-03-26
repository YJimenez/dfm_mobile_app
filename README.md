###To run project on ios
Install xcode

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


###To compile jsx files
```
npm install -g react-tools
jsx -x jsx --strip-types --harmony --watch .src/ build/
```

See http://flowtype.org/docs/running.html#_
