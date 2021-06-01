import { Component, Input } from '@angular/core';
import { IQuestion } from 'src/app/models/iquestion-question';

@Component({
  selector: 'dropdown-question',
  template: `
    <br><hr><br>
    <label class="form-label" for="{{'question-'+index+'-dropdown'}">{{question.title}}<span *ngIf="question.isRequired">*</span></label>
    <select class="form-control" id="{{'question-'+index+'-dropdown'}" required >
      <option *ngFor="let choice of question.choices; index as i" id="{{'question-'+index+'-'+'choice-'+i}}"  value="{{choice}}">{{choice}}</option>
    </select>
  `,
  styleUrls: ['../submission.component.css']
})

export class DropdownQuestionComponent {
  @Input() question!: IQuestion;
  @Input() index!: number;
}
