import React, { createContext, useContext, useState } from 'react'


export const AuthContext = createContext()


const AuthContextProvider = ({children}) => {

    const [isAuth, setisAuth ] = useState(false)

  return (
    <AuthContext.Provider value={{isAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
