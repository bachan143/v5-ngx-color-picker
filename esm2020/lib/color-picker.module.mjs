import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextDirective, SliderDirective } from './helpers';
import { ColorPickerService } from './color-picker.service';
import { ColorPickerComponent } from './color-picker.component';
import { ColorPickerDirective } from './color-picker.directive';
import './ng-dev-mode';
import * as i0 from "@angular/core";
export class ColorPickerModule {
}
ColorPickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ColorPickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ColorPickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: ColorPickerModule, declarations: [ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective], imports: [CommonModule], exports: [ColorPickerDirective] });
ColorPickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ColorPickerModule, providers: [ColorPickerService], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ColorPickerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [ColorPickerDirective],
                    providers: [ColorPickerService],
                    declarations: [ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective],
                    entryComponents: [ColorPickerComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYi9zcmMvbGliL2NvbG9yLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFaEUsT0FBTyxlQUFlLENBQUM7O0FBU3ZCLE1BQU0sT0FBTyxpQkFBaUI7OzhHQUFqQixpQkFBaUI7K0dBQWpCLGlCQUFpQixpQkFIWixvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsZUFBZSxhQUgvRSxZQUFZLGFBQ1osb0JBQW9COytHQUtwQixpQkFBaUIsYUFKakIsQ0FBRSxrQkFBa0IsQ0FBRSxZQUZ0QixZQUFZOzJGQU1aLGlCQUFpQjtrQkFQN0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBRSxZQUFZLENBQUU7b0JBQ3pCLE9BQU8sRUFBRSxDQUFFLG9CQUFvQixDQUFFO29CQUNqQyxTQUFTLEVBQUUsQ0FBRSxrQkFBa0IsQ0FBRTtvQkFDakMsWUFBWSxFQUFFLENBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBRTtvQkFDNUYsZUFBZSxFQUFFLENBQUUsb0JBQW9CLENBQUU7aUJBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IFRleHREaXJlY3RpdmUsIFNsaWRlckRpcmVjdGl2ZSB9IGZyb20gJy4vaGVscGVycyc7XHJcblxyXG5pbXBvcnQgeyBDb2xvclBpY2tlclNlcnZpY2UgfSBmcm9tICcuL2NvbG9yLXBpY2tlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29sb3JQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbG9yLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb2xvclBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vY29sb3ItcGlja2VyLmRpcmVjdGl2ZSc7XHJcblxyXG5pbXBvcnQgJy4vbmctZGV2LW1vZGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbIENvbW1vbk1vZHVsZSBdLFxyXG4gIGV4cG9ydHM6IFsgQ29sb3JQaWNrZXJEaXJlY3RpdmUgXSxcclxuICBwcm92aWRlcnM6IFsgQ29sb3JQaWNrZXJTZXJ2aWNlIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbIENvbG9yUGlja2VyQ29tcG9uZW50LCBDb2xvclBpY2tlckRpcmVjdGl2ZSwgVGV4dERpcmVjdGl2ZSwgU2xpZGVyRGlyZWN0aXZlIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbIENvbG9yUGlja2VyQ29tcG9uZW50IF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbG9yUGlja2VyTW9kdWxlIHt9XHJcbiJdfQ==