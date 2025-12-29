export interface AgendaItem {
  id: string;
  time: string;
  title: string;
  description: string;
  type: 'networking' | 'talk' | 'workshop' | 'break';
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  topic?: string;
  label?: 'speaker' | 'jury' | 'mentor' | ('speaker' | 'jury' | 'mentor')[];
}

