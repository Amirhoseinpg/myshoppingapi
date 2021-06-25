import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return Object', () => {
      expect(appController.mainroot()).toStrictEqual({pageTitle:"محصولات"});
    });

    it('should return Object', () => {
      expect(appController.createroot()).toStrictEqual({pageTitle:"ساخت محصول"});
    });

    it('should return Object', () => {
      expect(appController.deleteroot()).toStrictEqual({pageTitle:"حذف محصول"});
    });

    it('should return Object', () => {
      expect(appController.updateroot()).toStrictEqual({pageTitle:"بروزرسانی محصول"});
    });

    it('should return Object', () => {
      expect(appController.Showallroot()).toStrictEqual({pageTitle:"نمایش همه محصولات"});
    });
    it('should return Object', () => {
      expect(appController.Showproduct()).toStrictEqual({pageTitle:"نمایش محصول"});
    });



  });
});
