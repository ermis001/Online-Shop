import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCardPageComponent } from './shoping-card-page.component';

describe('ShopingCardPageComponent', () => {
  let component: ShopingCardPageComponent;
  let fixture: ComponentFixture<ShopingCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopingCardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopingCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
