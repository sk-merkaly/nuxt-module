import { Context } from '@nuxt/types'
import { AuthOptions, WebAuth } from 'auth0-js'

export default ({ app, $config }: Context, inject: Function) => {
  const options: AuthOptions = {
    domain: String($config.auth0.AUTH0_DOMAIN),
    clientID: String($config.auth0.AUTH0_CLIENT),
    responseType: 'token',
  }

  app.$auth0 = new WebAuth(options)
  inject('auth0', app.$auth0)

  return app.$auth0
}