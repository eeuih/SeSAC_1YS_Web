export interface IDiary {
    id: number;
    title: string;
    content: string;
    date: string;
  }

  export interface RootState {
    dates: [],
    diaries: []
  }

export interface DateProps {
  id: number; 
  date: string; 
}
