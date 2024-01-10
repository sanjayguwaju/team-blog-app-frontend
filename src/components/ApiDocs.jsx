import { useEffect } from 'react';

function RedirectToAPIDocs() {
  useEffect(() => {
    window.location.href = 'https://team-blog-app-backend.onrender.com/api-docs/';
  }, []);

  return null;
}

export default RedirectToAPIDocs;