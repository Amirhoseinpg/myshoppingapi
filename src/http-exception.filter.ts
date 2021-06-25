import { ArgumentsHost, Catch, ExceptionFilter, HttpException ,HttpStatus} from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {

    const ctx = host.switchToHttp();
    const response = ctx.getResponse();


    const status =
    exception instanceof HttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

      response.status(status).render("e.g.404.ejs",{
        statusCode: status,
        response: exception.getResponse(),
        pageTitle: `Error ${status}`,
      })


  }
}
