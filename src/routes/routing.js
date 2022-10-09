import React, { lazy, Suspense } from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "contexts/AuthContext";
import { Provider } from "react-redux";
import store from "app/store";
import Navigation from "common/components/Navigation";

const DashBoard = lazy(() => import("features/Dashboard"));
const Products = lazy(() => import("features/Products"));
const routing = (
  <Provider store={store}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthProvider>
          {/* <Topbar />
            <MobileHeader /> */}
          <Navigation />
          <Routes>
            {/* <Route exact path="/auth" component={AuthCmp} /> */}
            <Route exact path="/" element={<DashBoard />} />
            <Route exact path="/products" element={<Products />} />
          </Routes>
        </AuthProvider>
      </Suspense>
    </Router>
  </Provider>
);

export default routing;
