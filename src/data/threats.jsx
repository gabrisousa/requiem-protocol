import {
  GiBiohazard,
  GiVirus,
  GiHazardSign
} from 'react-icons/gi'

const threats = [
  {
    id: 1,
    name: 'T-VIRUS',
    status: 'ACTIVE',
    level: 'critical',
    infection: '92%',
    location: 'SECTOR 7',
    icon: <GiVirus />
  },

  {
    id: 2,
    name: 'G-VIRUS',
    status: 'CONTAINED',
    level: 'warning',
    infection: '48%',
    location: 'LAB B-12',
    icon: <GiBiohazard />
  },

  {
    id: 3,
    name: 'LAS PLAGAS',
    status: 'STABLE',
    level: 'safe',
    infection: '16%',
    location: 'EUROPE DIVISION',
    icon: <GiHazardSign />
  }
]

export default threats