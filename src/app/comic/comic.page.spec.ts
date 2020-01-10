import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComicPage } from './comic.page';

describe('HomePage', () => {
  let component: ComicPage;
  let fixture: ComponentFixture<ComicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComicPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
