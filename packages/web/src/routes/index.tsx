import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthRoute } from '@abb/controller';

import { RegisterConnector } from '../modules/register/RegisterConnector';
import { LoginConnector } from '../modules/login/LoginConnector';
import { Logout } from '../modules/logout';
import { ForgotPasswordConnector } from '../modules/forgotPassword/ForgotPasswordConnector';
import { ChangePasswordConnector } from '../modules/changePassword/ChangePasswordConnector';
import { TextPage } from '../modules/TextPage';
import { CreateListingConnector } from '../modules/listing/create/CreateListingConnector';
import { FindListingsConnector } from '../modules/listing/find/FindListingsConnector';
import { ViewListingConnector } from '../modules/listing/view/ViewListingConnector';
import { MessageConnector } from '../modules/listing/messages/MessageConnector';
import { EditListingConnector } from '../modules/listing/edit/EditListingConnector';
import { TestSub } from '../modules/TestSub';
import { TestMain } from '../modules/TestMain';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={TestMain} />
      <Route exact={true} path="/register" component={RegisterConnector} />
      <Route exact={true} path="/login" component={LoginConnector} />
      <Route exact={true} path="/logout" component={Logout} />
      <Route exact={true} path="/forgot-password" component={ForgotPasswordConnector} />
      <Route exact={true} path="/change-password/:key" component={ChangePasswordConnector} />
      <Route path="/m" component={TextPage} />
      <Route path="/listings" component={FindListingsConnector} />
      <Route path="/test-sub" component={TestSub} />
      <Route exact={true} path="/listing/:listingId" component={ViewListingConnector} />
      <Route path="/listing/:listingId/chat" component={MessageConnector} />
      <Route path="/listing/:listingId/edit" component={EditListingConnector} />
      <AuthRoute path="/create-listing" component={CreateListingConnector} />
    </Switch>
  </BrowserRouter>
);
