import * as Styled from './Layout.styles';

import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <Styled.Layout>
      <Outlet />
    </Styled.Layout>
  );
}

export default Layout;
