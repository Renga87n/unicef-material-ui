import React, { memo } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { StylesProvider, createGenerateClassName, jssPreset } from '@material-ui/styles'
import { create } from 'jss'
import { theme, Header } from 'unicef-material-ui'
import './App.css'
import { NavLinks, NavTabs, Form, CardWithTabs, Cards, Alert } from './components'
import {
  ListItemText,
  Badge,
  ListItem,
} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import avatar from './assets/avatar.png'

const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
});

const jss = create({
  ...jssPreset(),
  // Define a custom insertion point that JSS will look for when injecting the styles into the DOM.
  insertionPoint: 'jss-insertion-point',
});

function App() {

  const tabs = [{ name: 'Active', type: 'normal', link: "/header" }, { name: 'Disabled', type: 'disabled', link: null }, { name: 'Directory', type: 'normal', link: null }]

  // Example tab
  const tab = <React.Fragment>
    <ListItem button key="Active" selected>
      <ListItemText primary="Active" />
    </ListItem>
    <ListItem button key="Disbaled" disabled>
      <ListItemText primary="Disbaled" />
    </ListItem>
    <ListItem button key="Directory">
      <ListItemText primary="Directory" />
    </ListItem>
  </React.Fragment>
  // Menu Items
  const items = <React.Fragment>
    <ListItem button key="With Icon" >
      <ListItemIcon> <MailIcon /> </ListItemIcon>
      <ListItemText primary="With Icon" />
    </ListItem>
    <ListItem button key="Notifications">
      <ListItemIcon> <Badge badgeContent={17} color="secondary">
        <NotificationsIcon />
      </Badge> </ListItemIcon>
      <ListItemText primary="Notifications" />
    </ListItem>
  </React.Fragment>

  return (
    <MuiThemeProvider theme={theme}>
      <StylesProvider generateClassName={generateClassName}>
        <StylesProvider jss={jss}>
          <Header
            applicationName="Application"
            navLinks={<NavLinks />}
            tabs={<NavTabs tabs={tabs} />}
            // hideLogo={false}
            // logoBorderLine={false}
            // logo={<img alt="user" src={avatar} />}
            menuItems={items}
            menuTabs={tab}
            menuButton={true}
          />
          <div className="margin-top">
            <Form />
            <Alert />
            <CardWithTabs />
            <Cards />
          </div>
        </StylesProvider>
      </StylesProvider>
    </MuiThemeProvider>
  )
}
export default memo(App)