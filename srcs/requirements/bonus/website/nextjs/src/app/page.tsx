/* eslint-disable @next/next/no-img-element */
import { PostCard } from '@/components/PostCard'
import { Button } from '@/components/ui/button'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { Github } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <div>
      <div className="space-y-7">
        <div className="flex justify-between space-x-10">
          <div>
          <h1>hy, I&apos;m Kian</h1>
          <p>
            I&apos;m a 20 year old guy diving deep into the world of programming. Follow my journey as I study at 42 Firenze Logo42 Firenze and share my experiences with you. Let&apos;s embark on this tech adventure together! 🚀
          </p>
          </div>
          <img className="rounded-lg" src="/logo.webp" alt="Logo" width={200} />
        </div>
      </div>

      <div className="mt-16">
        <h2>From the blog</h2>
        <p className="mt-2 leading-8">
          Blog posts are written with MDX and processed through Contentlayer.
        </p>
      </div>
      <div className="mt-10 space-y-12 border-t border-gray-200 pt-10 dark:border-gray-700">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  )
}
