import { GlobalStyles } from './GlobalStyles';
import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { NotFound } from 'pages/NotFound';
// import { Navigate } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Tweets = lazy(() => import('../pages/Tweets'));

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="*" element={<Navigate to={'/'} />} /> */}
      </Routes>

      <GlobalStyles />
    </Layout>
  );
}
