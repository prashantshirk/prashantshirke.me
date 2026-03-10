import { notFound } from "next/navigation"
import { MDX } from "./mdx"
import { getPostBySlug } from "@/lib/blog"
import { formatDateLong } from "@/lib/utils"
import type { Metadata } from "next"

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata | undefined> {
  const slug = (await params).slug
  const post = getPostBySlug(slug)
  if (!post) {
    return
  }

  const publishedTime = formatDateLong(post.metadata.date)

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      publishedTime,
      type: "article",
      url: `https://prashantshirke.me/blog/${post.slug}`,
      images: [
        {
          url: `https://prashantshirke.me/og/blog?title=${post.metadata.title}`,
        },
      ],
    },
    twitter: {
      title: post.metadata.title,
      description: post.metadata.description,
      card: "summary_large_image",
      creator: "@prashantshirke_",                                        // YOUR TWITTER
      images: [
        `https://prashantshirke.me/og/blog?title=${post.metadata.title}&top=${publishedTime}`,
      ],
    },
  }
}

export default async function Post({ params }: PageProps) {
  const slug = (await params).slug
  const post = getPostBySlug(slug)
  if (!post) {
    notFound()
  }

  return (
    <section className="animate-fade-in-up">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.date,
            dateModified: post.metadata.date,
            description: post.metadata.description,
            image: `https://prashantshirke.me/og/blog?title=${post.metadata.title}&top=${formatDateLong(post.metadata.date)}`,
            url: `https://prashantshirke.me/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Prashant Shirke",                                    // YOUR NAME
            },
          }),
        }}
      />

      {post.metadata.draft && (
        <div className="mb-6 px-4 py-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-500 text-sm">
          This post is a draft and is not listed publicly.
        </div>
      )}

      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        <span className="text-accent mr-2">*</span>
        {post.metadata.title}
      </h1>

      <div className="mb-8 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <span>{formatDateLong(post.metadata.date)}</span>
      </div>

      <article className="prose dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-gray-900 dark:prose-a:text-white hover:prose-a:underline prose-p:text-gray-800 dark:prose-p:text-gray-100 prose-li:text-gray-800 dark:prose-li:text-gray-100 prose-strong:text-gray-900 dark:prose-strong:text-white">
        <MDX source={post.content} />
      </article>
    </section>
  )
}
