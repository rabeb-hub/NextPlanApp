
export class Team {
  id!: number;
  name!: string;
  members!: Member[];
}

export class Member {
  id!: number;
  name!: string;
  role!: string;
}
