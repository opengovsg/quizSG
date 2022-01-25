import { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import { CREATOR_ROUTE, ROOT_ROUTE } from '~constants/routes'

import { PublicRoute } from './PublicRoute'

const LandingPage = lazy(() => import('~pages/LandingPage'))
const CreatorLandingPage = lazy(() => import('~pages/CreatorLandingPage'))

export const AppRouter = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <PublicRoute exact path={CREATOR_ROUTE} strict={false}>
          <CreatorLandingPage />
        </PublicRoute>
        <PublicRoute path={ROOT_ROUTE} strict={false}>
          <LandingPage />
        </PublicRoute>
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </Suspense>
  )
}
