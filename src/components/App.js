import { GlobalStyles } from './GlobalStyles';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { NotFound } from 'pages/NotFound';

const Home = lazy(() => import('../pages/Home'));
const Tweets = lazy(() => import('../pages/Tweets'));

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <GlobalStyles />
    </Layout>
  );
}
