import React, { createRef, useState } from "react";
import { useRouter } from "next/router";
import { Portal, useDisclosure } from "@chakra-ui/react";
import MainPanel from "components/Layout/MainPanel";
import Sidebar from "components/Sidebar/Sidebar";
import routes from 'components/Sidebar/routes'
import AdminNavbar from "components/Navbars/AdminNavbar";

interface AdminProps extends React.HTMLAttributes<any> {
  sidebarVariant: string;
}

export default function Admin(props: AdminProps) {
  const { sidebarVariant, children, ...rest } = props

  const router = useRouter()

  const mainPanel = createRef();

  const [fixed, setFixed] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const getActiveRoute = (routes) => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].views);
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else {
        if (
          router.pathname.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };

  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbar(routes[i].views);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (
          router.pathname.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          if (routes[i].secondaryNavbar) {
            return routes[i].secondaryNavbar;
          }
        }
      }
    }
    return activeNavbar;
  };

  return (
    <>
      <Sidebar 
        sidebarVariant={sidebarVariant}
        {...rest}
      />
      <MainPanel
        ref={mainPanel}
        w={{
          base: "100%",
          xl: "calc(100% - 275px)",
        }}
      >
        {/* <Portal> */}
          <AdminNavbar
            variant="transparent"
            onOpen={onOpen}
            brandText={getActiveRoute(routes)}
            secondary={getActiveNavbar(routes)}
            fixed={fixed}
            {...rest}
          ></AdminNavbar>
        {/* </Portal> */}
      </MainPanel>
    </>
  );
}
