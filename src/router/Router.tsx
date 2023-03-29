import { Routes, Route } from 'react-router-dom'
import { DefaultLayout, ErrorLayout } from '~/layouts'
import { RouteNamesEnum } from './Router.types'
import { Home, Error } from '~/pages'

const Router = () => (
    <Routes>
        <Route element={<DefaultLayout />}>
            <Route path={RouteNamesEnum.home} element={<Home />} />
        </Route>

        <Route element={<ErrorLayout />}>
            <Route path="/error" element={<Error />} />
        </Route>
    </Routes>
)

export default Router
