export interface TimelineEvent {
  year: string;
  month: string;
  title: string;
  description: string;
  milestone?: boolean;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2017',
    month: 'October',
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula quis augue non euismod.',
    milestone: true,
  },
  {
    year: '2020',
    month: 'April',
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula quis augue non euismod.',
  },
  {
    year: '2021',
    month: 'February',
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula quis augue non euismod.',
  },
  {
    year: '2021',
    month: 'September',
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula quis augue non euismod.',
    milestone: true,
  },
  {
    year: '2022',
    month: 'June',
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula quis augue non euismod.',
    milestone: true,
  },
  {
    year: '2023',
    month: 'January',
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula quis augue non euismod.',
  },
  {
    year: '2023',
    month: 'October',
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula quis augue non euismod.',
    milestone: true,
  },
  {
    year: '2024',
    month: 'Present',
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula quis augue non euismod.',
    milestone: true,
  },
];