// import React from 'react';

// import { jwtDecode, JwtPayload } from 'jwt-decode';

// import { OpenRoutes } from './OpenRoutes';

// import { useAuth } from '../shared/hooks/auth';

// import { environment } from '../shared/environment';

// export const AppRoutes: React.FC = () => {
//   const { user, token } = useAuth();

//   if (token) {
//     const decoded = jwtDecode<JwtPayload>(token);

//     localStorage.removeItem(environment.APP_NAME);
//   }

//   return <OpenRoutes />;
// };
