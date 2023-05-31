import React from 'react'
import MasterLayout from './layouts/MasterLayout/MasterLayout'
import {Route,Routes} from 'react-router-dom'
import { publicRoutes } from './routes'

const App = () => {
  return (
    <>
      <MasterLayout>
        <Routes>
        {publicRoutes.map((router, i) => {
              const Page = router.component;
              return <Route key={i} path={router.path} element={<Page />} />;
            })}


        </Routes>
      </MasterLayout>
    </>
  )
}

export default App