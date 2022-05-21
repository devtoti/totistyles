import '../styles/globals.css'
import Layout from '../components/layout'
import {useRouter} from 'next/router'
import { useEffect  } from 'react';
import Head from 'next/head'
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    storePathValues, [router.asPath]}
    );
    
    function storePathValues() {
      console.log(prevPath, storage)
    const storage = globalThis?.sessionStorage;
    if (!storage) return;
    // Set the previous path as the value of the current path.
    const prevPath = storage.getItem("currentPath");
    storage.setItem("prevPath", prevPath);
    // Set the current path value by looking at the browser's location object.
    storage.setItem("currentPath", globalThis.location.pathname);
  }


  return (
    <>
      {router.pathname == "/projects" || router.pathname == "/contact" ? (
        <Layout>
        
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

// const getLayout = Component.getLayout ?? <Component {...pageProps} />


// return getLayout(<Component {...pageProps} />)

// return (
//   <Layout>
//   <Component {...pageProps} />
//   </Layout>
//   )