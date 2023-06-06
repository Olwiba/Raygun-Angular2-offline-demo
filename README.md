![](https://assets-global.website-files.com/5e2701b416b6d176f5007781/6344bbf42c1388b9f34a5c6f_logo-colour-stylised-2.svg)

A working example of the Raygun4JS provider integrated into the Angular2 framework.

```EBNF
This demo has been based off Angular.io's Tour of Heroes test app.
```

## To get running
1. Pull down repo
2. `yarn install` or `npm install`
3. Update Raygun API key in `app.raygun.setup.ts:5` & save
4. `yarn start` or `npm start`
5. Open application inside browser http://localhost:4200/
6. RUM and CR data will be sent to Raygun 🎉

## To test offline capabilities
1. Open application inside browser http://localhost:4200/
![](/example-images/application.png)
2. Open dev tools
3. Open the Application tab, select Local Storage > http://localhost:4200
-  - Note: you should only see the `raygun4js-sid` and `raygun4js-userid` keys at this point
![](/example-images/local-storage--empty.png)
4. Go to the Network tab
5. Select Offline to simulate no network activity
![](/example-images/network--off.png)
6. Open the application & click on the `Trigger error` button to simulate an error while offline
![](/example-images/application-button.png)
7. Go back to the Application tab, select Local Storage > http://localhost:4200
-  - You should now see a new `raygun4js+[API_KEY]...` key entry for the offline triggered error
![](/example-images/local-storage--event.png)
8. Go back to the Network tab & re-enable network activity
![](/example-images/network--on.png)
9. Go back to the Application tab, select Local Storage > http://localhost:4200
- - Watch as the `raygun4js+[API_KEY]...` key entry is picked up, sent off & removed
- - Note: The provider periodically checks for offline errors, you can reload the app for the key to instantly be picked up & sent off
![](/example-images/message-sent.gif)

Happy coding!