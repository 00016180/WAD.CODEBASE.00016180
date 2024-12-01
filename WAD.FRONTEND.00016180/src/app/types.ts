export interface Task {
    Id: number;
    Title: string;
    Notes: string;
    CategoryId?: number;
    Category?: Category;
    IsCompleted?: boolean;
    EnteredDate: Date;
    DueDate: Date;
}

export interface Category {
    Id: number;
    Name: string;
}
