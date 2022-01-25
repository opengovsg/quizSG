import React, { lazy, Suspense } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

const LandingPage = lazy(() => import('./LandingPage'))
const TakeQuizPage = lazy(() => import('./TakeQuizPage'))

const LandingPageRouter = (): JSX.Element => {
  const { path } = useRouteMatch()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path={path}>
          <LandingPage />
        </Route>
        <Route path={`${path}:quizId`}>
          <TakeQuizPage />
        </Route>
      </Switch>
    </Suspense>
  )
}

export default LandingPageRouter
