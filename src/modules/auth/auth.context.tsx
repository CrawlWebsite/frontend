import { User } from '@frontend/repositories';
import { createContext, useContext } from 'react';

type AuthContextType = {
  user: User | null;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
});

export const AuthProvider = (props: any) => {
  return (
    <AuthContext.Provider
      value={{
        user: {
          name: 'Nelson',
          email: 'nelson@gmail.com',
        },
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);
