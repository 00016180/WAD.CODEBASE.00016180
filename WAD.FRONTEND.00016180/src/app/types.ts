export interface Task {
  id: number;
  title: string;
  notes: string;
  categoryId?: number;
  category?: Category;
  isCompleted?: boolean;
  enteredDate: Date;
  dueDate: Date | string;
}

export interface Category {
  id: number;
  name: string;
}
