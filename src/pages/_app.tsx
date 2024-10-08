// pages/_app.tsx
import '../styles/globals.css';  // Global styles
import '../styles/AppLayout.css';  // Specific styles
import '../styles/PeopleTable.css';  // Specific styles
import '../styles/Sidebar.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
