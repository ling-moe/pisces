import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BASE_URL } from '../interceptors/base-url-interceptor';
import { SANCTUM_PREFIX, SanctumService } from './sanctum.service';

describe('SanctumService', () => {
  let httpMock: HttpTestingController;
  let sanctumService: SanctumService;

  const setBaseUrlAndSanctumPrefix = (baseUrl: string | null, sanctumPrefix: string | null) => {
    TestBed.overrideProvider(BASE_URL, { useValue: baseUrl });
    TestBed.overrideProvider(SANCTUM_PREFIX, { useValue: sanctumPrefix });

    httpMock = TestBed.inject(HttpTestingController);
    sanctumService = TestBed.inject(SanctumService);
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: BASE_URL, useValue: null },
        { provide: SANCTUM_PREFIX, useValue: null },
        SanctumService,
      ],
    });
  });

  afterEach(() => httpMock.verify());

  it('should get csrf cookie once', done => {
    setBaseUrlAndSanctumPrefix(null, null);

    sanctumService.load().then(data => {
      expect(data).toEqual({ cookie: true });
      done();
    });

    httpMock.expectOne('/sanctum/csrf-cookie').flush({ cookie: true });
  });

  it('should get csrf cookie with base url', done => {
    setBaseUrlAndSanctumPrefix('http://foo.bar/api', '');

    sanctumService.load().then((data: unknown) => {
      expect(data).toEqual({ cookie: true });
      done();
    });

    httpMock.expectOne('http://foo.bar/sanctum/csrf-cookie').flush({ cookie: true });
  });

  it('should get csrf cookie with sanctum prefix', done => {
    setBaseUrlAndSanctumPrefix(null, '/foobar/');

    sanctumService.load().then((data: unknown) => {
      expect(data).toEqual({ cookie: true });
      done();
    });

    httpMock.expectOne('/foobar/csrf-cookie').flush({ cookie: true });
  });

  it('should get csrf cookie with base url and sanctum prefix', done => {
    setBaseUrlAndSanctumPrefix('http://foo.bar/api/', '/foobar');

    sanctumService.load().then((data: unknown) => {
      expect(data).toEqual({ cookie: true });
      done();
    });

    httpMock.expectOne('http://foo.bar/foobar/csrf-cookie').flush({ cookie: true });
  });
});
