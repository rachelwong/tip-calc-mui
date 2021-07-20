### Tip Calculator

![screenshot](/src/screenshot.png)

### Learning notes

* import `makeStyles` `ThemeProvider` `useTheme` from `@material-ui/core/styles` NOT `@material-ui/styles`
* when migrating from react to typescript, remember to amend the `tsconfig.json`, particularly to allow for `.jsx`

```json
    "jsx": "react-jsx",
```

* Refer to the [React cheatsheet](https://github.com/typescript-cheatsheets/react) and the official typescript docs rather than youtube tutorials for best practice. For example, avoid usinig `React.FC` over `React.VFC`

### Helpful resources

* For migrating react projects to typescript https://www.sitepoint.com/how-to-migrate-a-react-app-to-typescript/