import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import Admin from "layouts/Admin";

const Usuarios: NextPage = () => {
  const [sidebarVariant, setSidebarVariant] = useState("transparent");

  return <Admin sidebarVariant={sidebarVariant}></Admin>;
};

export default Usuarios;
