import { NgModule } from '@angular/core';
import { EmailComponent } from './email.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
export class EmailModule {
}
EmailModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EmailComponent],
                imports: [
                    FontAwesomeModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CommonModule
                ],
                exports: [EmailComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZW1haWwvc3JjL2xpYi9lbWFpbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQWMvQyxNQUFNLE9BQU8sV0FBVzs7O1lBVnZCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQzlCLE9BQU8sRUFBRTtvQkFDUCxpQkFBaUI7b0JBQ2pCLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQzthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbWFpbENvbXBvbmVudCB9IGZyb20gJy4vZW1haWwuY29tcG9uZW50JztcbmltcG9ydCB7IEZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7IFxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0VtYWlsQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlICxcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0VtYWlsQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBFbWFpbE1vZHVsZSB7IH1cbiJdfQ==