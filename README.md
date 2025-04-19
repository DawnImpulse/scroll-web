# SCROLL

The core principle of this product is to let you add your emergency/known contacts so that in case of an emergency when your phone is unavailable, you can easily use anyone's device, open this website, login & get access to your saved contacts. This is the most simplest way to do the work, which usually requires you to login to google/apple account on another device which is mostly not secure in stranger's device.

## How to use
* Well basically open the website https://scroll.codevry.com
* Click on "Go To App"
* Login/Signup with your email & choose a 4 digit pin
  * remember pin can't be changed ever
  * the reason is all your data is encrypted with the pin & the pin never leaves your device
* Then simply click on "New Contact" & save your contact :)

## Self-host
It's very simple to self-host this on your own as well

* Create a new firebase project
* Create realtime database
* Add a new web application to firebase project
  * Copy the details/project-keys shown there
  * Paste it in nuxt.config.js > vuefire > config
* Test locally once & the deploy it any service like
  * own servers
  * firebase hosting
  * vercel
  * netlify

## Contact
For any questions / suggestions / issues ; feel free to contact me :)
* dawnimpulse@gmail.com

## License
```
Copyright 2025 Codevry Labs

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```