import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { APP_FILTER } from '@nestjs/core'
import { ErrorHandler } from 'appFilter/errorHandler'
// import { ServeStaticModule } from '@nestjs/serve-static'
import { HelmetMiddleware } from 'middlewares/helmet.middleware'
import { SessionMiddleware } from 'middlewares/session.middleware'
// import { join } from 'path'
import { ApiModule } from './api.module'

@Module({
  imports: [
    // TODO: uncomment when working on front-end
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', '..', 'frontend', 'build'),
    //   serveStaticOptions: {
    //     maxAge: 2 * 60 * 60 * 1000, // 2 hours, same as cloudflare
    //     setHeaders: function (res, path) {
    //       // set maxAge to 0 for root index.html
    //       if (
    //         path ===
    //         join(__dirname, '..', '..', 'frontend', 'build', 'index.html')
    //       ) {
    //         res.setHeader('Cache-control', 'public, max-age=0')
    //       }
    //     },
    //   },
    // }),
    ApiModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ErrorHandler,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    // Apply global middlewares
    consumer.apply(HelmetMiddleware, SessionMiddleware).forRoutes('/api/*')
  }
}
