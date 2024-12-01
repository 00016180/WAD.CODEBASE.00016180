import { Component } from '@angular/core';
import { Task } from '../../types';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  tasks: Task[] = [
    {
      Id: 1,
      Title: 'Complete Project',
      Notes: 'Finish the coding project by the deadline.',
      CategoryId: 3,
      Category: {
        Id: 3,
        Name: 'Work',
      },
      EnteredDate: new Date('2024-11-29T05:41:57.12Z'),
      DueDate: new Date('2024-11-29T05:41:57.12Z'),
    },
    {
      Id: 2,
      Title: 'Buy Groceries',
      Notes: 'Purchase items for the week.',
      CategoryId: 1,
      Category: {
        Id: 1,
        Name: 'Personal',
      },
      EnteredDate: new Date('2024-11-29T05:41:57.12Z'),
      DueDate: new Date('2024-11-29T05:41:57.12Z'),
    },
    {
      Id: 3,
      Title: 'Read Book',
      Notes: 'Read the latest novel.',
      CategoryId: 2,
      Category: {
        Id: 2,
        Name: 'Leisure',
      },
      EnteredDate: new Date('2024-11-29T05:41:57.12Z'),
      DueDate: new Date('2024-11-29T05:41:57.12Z'),
    },
    {
      Id: 4,
      Title: 'Plan Vacation',
      Notes: 'Research and plan a vacation destination.',
      CategoryId: 2,
      Category: {
        Id: 2,
        Name: 'Leisure',
      },
      EnteredDate: new Date('2024-11-29T05:41:57.12Z'),
      DueDate: new Date('2024-11-29T05:41:57.12Z'),
    },
    {
      Id: 5,
      Title: 'Exercise',
      Notes: 'Go for a jog or hit the gym.',
      CategoryId: 1,
      Category: {
        Id: 1,
        Name: 'Personal',
      },
      EnteredDate: new Date('2024-11-29T05:41:57.12Z'),
      DueDate: new Date('2024-11-29T05:41:57.12Z'),
    },
    {
      Id: 6,
      Title: 'Write Blog Post',
      Notes: 'Create a new blog post on a relevant topic.',
      CategoryId: 3,
      Category: {
        Id: 3,
        Name: 'Work',
      },
      EnteredDate: new Date('2024-11-29T05:41:57.12Z'),
      DueDate: new Date('2024-11-29T05:41:57.12Z'),
    },
    {
      Id: 7,
      Title: 'Attend Meeting',
      Notes: 'Participate in the weekly team meeting.',
      CategoryId: 3,
      Category: {
        Id: 3,
        Name: 'Work',
      },
      EnteredDate: new Date('2024-11-29T05:41:57.12Z'),
      DueDate: new Date('2024-11-29T05:41:57.12Z'),
    },
    {
      Id: 8,
      Title: 'Cook Dinner',
      Notes: 'Prepare a delicious dinner for the family.',
      CategoryId: 1,
      Category: {
        Id: 1,
        Name: 'Personal',
      },
      EnteredDate: new Date('2024-11-29T05:41:57.12Z'),
      DueDate: new Date('2024-11-29T05:41:57.12Z'),
    },
    {
      Id: 9,
      Title: 'Learn New Skill',
      Notes: 'Start learning a new programming language.',
      CategoryId: 3,
      Category: {
        Id: 3,
        Name: 'Work',
      },
      EnteredDate: new Date('2024-11-29T05:41:57.12Z'),
      DueDate: new Date('2024-11-29T05:41:57.12Z'),
    },
    {
      Id: 10,
      Title: 'Watch Movie',
      Notes: 'Catch up on the latest blockbuster.',
      CategoryId: 2,
      Category: {
        Id: 2,
        Name: 'Leisure',
      },
      EnteredDate: new Date('2024-11-29T05:41:57.12Z'),
      DueDate: new Date('2024-11-29T05:41:57.12Z'),
    },
    {
      Id: 11,
      Title: 'Organize Workspace',
      Notes: 'Declutter and organize the home office.',
      CategoryId: 3,
      Category: {
        Id: 3,
        Name: 'Work',
      },
      EnteredDate: new Date('2024-11-29T05:41:57.12Z'),
      DueDate: new Date('2024-11-29T05:41:57.12Z'),
    },
    {
      Id: 12,
      Title: 'Attend Webinar',
      Notes: 'Participate in a webinar on emerging technologies.',
      CategoryId: 3,
      Category: {
        Id: 3,
        Name: 'Work',
      },
      EnteredDate: new Date('2024-11-29T05:41:57.12Z'),
      DueDate: new Date('2024-11-29T05:41:57.12Z'),
    },
    {
      Id: 13,
      Title: 'Practice Instrument',
      Notes: 'Spend time practicing the guitar.',
      CategoryId: 2,
      Category: {
        Id: 2,
        Name: 'Leisure',
      },
      EnteredDate: new Date('2024-11-29T05:41:57.12Z'),
      DueDate: new Date('2024-11-29T05:41:57.12Z'),
    },
    {
      Id: 14,
      Title: 'Update Resume',
      Notes: 'Revise and update the professional resume.',
      CategoryId: 3,
      Category: {
        Id: 3,
        Name: 'Work',
      },
      EnteredDate: new Date('2024-11-29T05:41:57.12Z'),
      DueDate: new Date('2024-11-29T05:41:57.12Z'),
    },
    {
      Id: 15,
      Title: 'Explore Local Park',
      Notes: 'Take a leisurely walk in the nearby park.',
      CategoryId: 2,
      Category: {
        Id: 2,
        Name: 'Leisure',
      },
      EnteredDate: new Date('2024-11-29T05:41:57.12Z'),
      DueDate: new Date('2024-11-29T05:41:57.12Z'),
    },
    {
      Id: 16,
      Title: 'Complete Online Course',
      Notes: 'Finish the online course on data science.',
      CategoryId: 3,
      Category: {
        Id: 3,
        Name: 'Work',
      },
      EnteredDate: new Date('2024-11-29T05:41:57.12Z'),
      DueDate: new Date('2024-11-29T05:41:57.12Z'),
    },
    {
      Id: 17,
      Title: 'Volunteer for Charity',
      Notes: 'Contribute time to a local charity or community service.',
      CategoryId: 1,
      Category: {
        Id: 1,
        Name: 'Personal',
      },
      EnteredDate: new Date('2024-11-29T05:41:57.12Z'),
      DueDate: new Date('2024-11-29T05:41:57.12Z'),
    },
    {
      Id: 18,
      Title: 'Visit Art Gallery',
      Notes: 'Explore the latest art exhibitions in the city.',
      CategoryId: 2,
      Category: {
        Id: 2,
        Name: 'Leisure',
      },
      EnteredDate: new Date('2024-11-29T05:41:57.12Z'),
      DueDate: new Date('2024-11-29T05:41:57.12Z'),
    },
    {
      Id: 19,
      Title: 'Review Budget',
      Notes: 'Assess and review monthly budget and expenses.',
      CategoryId: 1,
      Category: {
        Id: 1,
        Name: 'Personal',
      },
      EnteredDate: new Date('2024-11-29T05:41:57.12Z'),
      DueDate: new Date('2024-11-29T05:41:57.12Z'),
    },
    {
      Id: 20,
      Title: 'Practice Meditation',
      Notes: 'Engage in daily meditation for mindfulness.',
      CategoryId: 1,
      Category: {
        Id: 1,
        Name: 'Personal',
      },
      EnteredDate: new Date('2024-11-29T05:41:57.12Z'),
      DueDate: new Date('2024-11-29T05:41:57.12Z'),
    },
  ];
  displayedColumns: string[] = [
    'Id',
    'Title',
    'Notes',
    'Category Name',
    'Entered Date',
    'Due Date',
    'Actions',
  ];
  formatDate(date: string | Date): string {
    const parsedDate = typeof date === 'string' ? new Date(date) : date;
    return parsedDate.toDateString(); // e.g., "Fri Nov 29 2024"
  }
}
