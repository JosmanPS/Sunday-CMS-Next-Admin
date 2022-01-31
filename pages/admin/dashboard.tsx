import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Admin from "../../layouts/Admin";

const Dashboard: NextPage = () => {
  const [sidebarVariant, setSidebarVariant] = useState("transparent");

  return <Admin sidebarVariant={sidebarVariant}></Admin>;
};

export default Dashboard;
