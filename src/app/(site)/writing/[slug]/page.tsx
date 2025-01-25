import { DocumentRenderer } from "@keystatic/core/renderer";
import { createReader } from "@keystatic/core/reader";
import { Metadata } from "next";
import keystaticConfig from "../../../../../keystatic.config";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getArticleRenderers } from "@/components/keystatic/renderer";
import formatDate from "@/lib/format-date";
import { Separator } from "@/components/ui/separator";

interface Props {
  params: {
    slug: string;
  };
}

export const dynamicParams = false;
const reader = createReader(process.cwd(), keystaticConfig);

export async function generateStaticParams(): Promise<Props["params"][]> {
  const writings = await reader.collections.writings.all();
  return writings.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const writings = await reader.collections.writings.read(params.slug);

  if (!writings) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    };
  }

  const url = `https://rahmanaulia.com/writing/${params.slug}`;

  return {
    title: writings.title,
    description: writings.description,
    authors: [{ name: "Aulia Rahman" }],
    openGraph: {
      type: "article",
      url,
      title: writings.title,
      description: writings.description,
      images: writings.cover ? [{ url: writings.cover }] : [],
      siteName: "Rahman Aulia",
      locale: "en_US",
      publishedTime: writings.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: writings.title,
      description: writings.description,
      images: writings.cover ? [writings.cover] : [],
      creator: "@rhmnaul",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const renderers = getArticleRenderers();
  const writings = await reader.collections.writings.read(params.slug);
  return writings ? (
    <article className="w-full flex flex-col">
      <nav aria-label="Breadcrumb">
        <Link
          href="/writing"
          className="text-base text-foreground/70 flex gap-1 items-center mb-4"
          aria-label="Back to writings list"
        >
          <ArrowLeft size={16} />
          <span>Back to list</span>
        </Link>
      </nav>
      {writings.cover && (
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            src={writings.cover ?? ""}
            alt="Article cover"
            className="mb-8 aspect-video w-full rounded not-prose bg-neutral-500 object-cover"
          />
        </figure>
      )}
      <header>
        <h1 className="md:text-3xl text-2xl font-serif font font-medium text-pretty mb-2">
          {writings.title}
        </h1>
        <p className="text-foreground/60 md:text-sm text-xs">
          Published at {formatDate(writings.publishedAt)} by Aulia Rahman
        </p>
      </header>
      <Separator className="my-3" />
      <section className="w-full prose-sm prose-h1:first-of-type:text-center prose-h1:text-pretty prose dark:prose-invert">
        <DocumentRenderer
          document={await writings.content()}
          renderers={renderers}
        />
      </section>
      <Separator className="my-3" />
      <footer>
        <Link
          href="/writing"
          className="text-base text-foreground/70 flex gap-1 items-center mb-4"
          aria-label="Back to writings list"
        >
          <ArrowLeft size={16} />
          <span>Back to list</span>
        </Link>
      </footer>
    </article>
  ) : (
    <div>No Writings Found</div>
  );
}
