import { lazy, Suspense } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

const CreatorLandingPage = lazy(() => import('./CreatorLandingPage'))
const CreateQuizPage = lazy(() => import('./CreateQuizPage'))

const CreatorLandingPageRouter = (): JSX.Element => {
  const { path } = useRouteMatch()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path={path}>
          <CreatorLandingPage />
        </Route>
        <Route path={`${path}/create`}>
          <CreateQuizPage />
        </Route>
      </Switch>
    </Suspense>
  )
}

export default CreatorLandingPageRouter
