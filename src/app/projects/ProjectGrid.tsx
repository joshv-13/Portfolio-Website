import { getAllProjects } from '@/lib/projects'
import ProjectGridClient from './ProjectGridClient'

export default function ProjectGrid() {
  return <ProjectGridClient projects={getAllProjects()} />
}
