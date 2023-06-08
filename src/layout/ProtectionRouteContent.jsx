import React from "react";

import { ProtectedRoute } from "./ProtectedRoute";
import Layout from ".";

export const ProtectionRouteContent = ({ Component }) => {
  return (
    <>
      <Layout>
        <ProtectedRoute Component={Component} />
      </Layout>
    </>
  );
};
