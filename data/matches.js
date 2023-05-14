const matches = [
  {
    teams: ['Real Madrid', 'Barcelona'],
    status: {
      isEnded: false,
      inProgress: true,
      winner: '',
      message: 'Real Madrid leading by 2 goals',
    },
    tournament: 'La Liga',
  },
  {
    teams: ['England', 'New Zealand'],
    status: {
      isEnded: true,
      inProgress: false,
      winner: 'England',
      message: 'England Won by 3 wickets',
    },
    tournament: 'ICC Cricket World Cup',
  },
  {
    teams: ['Golden State Warriors', 'Los Angeles Lakers'],
    status: {
      isEnded: false,
      inProgress: true,
      winner: '',
      message: 'Golden State Warriors leading by 10 points',
    },
    tournament: 'NBA Finals',
  },
  {
    teams: ['Germany', 'France'],
    status: {
      isEnded: true,
      inProgress: false,
      winner: 'France',
      message: 'France Won by 2 goals',
    },
    tournament: 'UEFA Euro Cup',
  },
  {
    teams: ['Serena Williams', 'Maria Sharapova'],
    status: {
      isEnded: false,
      inProgress: true,
      winner: '',
      message: 'Serena Williams leading by 1 set',
    },
    tournament: 'Wimbledon',
  },
]

export default matches
