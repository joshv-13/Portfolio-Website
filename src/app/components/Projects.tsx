// src/components/FeaturedProjects.tsx  ← Server Component
import { getFeaturedProjects } from '@/lib/projects'
import FeaturedProjectsClient from './ProjectsClient' // or ./ProjectsClient

export default async function FeaturedProjects() {
  const projects = await getFeaturedProjects()
  return <FeaturedProjectsClient projects={projects} />
}