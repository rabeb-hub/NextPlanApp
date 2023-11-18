export class Task {
  id!: number;
  title!: string;
  description!: string;
  status!: string;
  dueDate!: string;
}

export class Project {
  id!: number;
  name!: string;
  description!: string;
  teamId!: number;
  tasks!: Task[];
}
