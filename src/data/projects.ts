import type { ProjectEntry } from '../types'

export const projects: ProjectEntry[] = [
  {
    id: 'p1',
    title: 'Personal Website',
    description: 'A minimal personal website built with Vue 3 and Vite.',
    tags: ['vue', 'vite', 'design'],
    year: 2025,
    link: 'https://example.com',
    repo: 'https://github.com/example/personal-website',
    image: '',
    featured: true,
  },
  {
    id: 'p2',
    title: 'Task Manager App',
    description: 'A small task manager with localStorage sync and keyboard shortcuts.',
    tags: ['typescript', 'pwa'],
    year: 2024,
    repo: 'https://github.com/example/task-manager',
  },
  {
    id: 'p3',
    title: 'Open-source Library',
    description: 'A lightweight utility library released under MIT.',
    tags: ['library', 'npm'],
    year: 2023,
    repo: 'https://github.com/example/library',
  },
]

