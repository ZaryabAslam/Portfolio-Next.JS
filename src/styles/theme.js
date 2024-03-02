import { ThemeProvider } from 'styled-components';

import theme from "../themes/default";
import GlobalStyles from './globals';
import { Layout } from '../layout/Layout';

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
      <Layout>
    <GlobalStyles />
    {children}
    </Layout>
  </ThemeProvider>
);

export default Theme;