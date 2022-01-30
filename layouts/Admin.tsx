import Sidebar from "components/Sidebar/Sidebar";
import React from "react";

interface AdminProps {
  sidebarVariant: string
}

export default function Admin(props: AdminProps) {
  return (
    <>
      <Sidebar sidebarVariant={props.sidebarVariant} />
    </>
  )
}
